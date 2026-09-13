exports.handler = async (event) => {
  // Allow requests from your website
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Handle browser preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }

  // Only POST is allowed
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Method not allowed"
      })
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const reference = body.reference;
    const expectedAmount = Number(body.expectedAmount);

    // Validate request
    if (!reference) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Payment reference is required"
        })
      };
    }

    if (!Number.isFinite(expectedAmount) || expectedAmount <= 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Valid expected amount is required"
        })
      };
    }

    // Secret key MUST come from Netlify environment variables
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is not configured");

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Payment service is not configured"
        })
      };
    }

    // Ask Paystack to verify the transaction
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`
        }
      }
    );

    const result = await response.json();

    if (!response.ok || !result.status || !result.data) {
      console.error("Paystack verification failed:", result);

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: result.message || "Payment verification failed"
        })
      };
    }

    const transaction = result.data;

    // Paystack amount is in kobo
    const expectedAmountInKobo = Math.round(expectedAmount * 100);

    // Check payment status
    if (transaction.status !== "success") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Payment was not successful",
          status: transaction.status
        })
      };
    }

    // Check currency
    if (transaction.currency !== "NGN") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Invalid payment currency"
        })
      };
    }

    // Check the amount paid
    if (Number(transaction.amount) !== expectedAmountInKobo) {
      console.error("Amount mismatch:", {
        expected: expectedAmountInKobo,
        received: transaction.amount,
        reference
      });

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Payment amount does not match the order amount"
        })
      };
    }

    // Card payment check
    if (transaction.channel !== "card") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "This transaction was not completed by card"
        })
      };
    }

    // Everything checks out
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Payment verified successfully",
        reference: transaction.reference,
        amount: transaction.amount,
        currency: transaction.currency,
        status: transaction.status,
        channel: transaction.channel,
        paidAt: transaction.paid_at
      })
    };

  } catch (error) {
    console.error("VERIFY PAYMENT ERROR:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Unable to verify payment"
      })
    };
  }
};