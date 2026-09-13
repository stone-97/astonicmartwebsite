exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Handle browser preflight
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

    const email = body.email;
    const amount = Number(body.amount);
    const orderId = body.orderId;
    const name = body.name;
    const phone = body.phone;

    // ================= VALIDATION =================

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Customer email is required"
        })
      };
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Valid payment amount is required"
        })
      };
    }

    if (!orderId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Order ID is required"
        })
      };
    }

    if (!name) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Customer name is required"
        })
      };
    }

    if (!phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Customer phone number is required"
        })
      };
    }

    // ================= PAYSTACK SECRET =================

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

    // ================= UNIQUE REFERENCE =================

    const reference = `AST-${orderId}-${Date.now()}`;

    // Paystack expects amount in kobo
    const amountInKobo = Math.round(amount * 100);

    // ================= PAYSTACK INITIALIZATION =================

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email: email,
          amount: amountInKobo,
          currency: "NGN",
          reference: reference,

          // Card payment only
          channels: ["card"],

          // Information attached to the transaction
          metadata: {
            order_id: orderId,
            customer_name: name,
            phone_number: phone,
            customer_email: email,
            payment_method: "card",
            payment_type: "full_payment",

            // These appear on the Paystack transaction dashboard
            custom_fields: [
              {
                display_name: "Order ID",
                variable_name: "order_id",
                value: orderId
              },
              {
                display_name: "Customer Name",
                variable_name: "customer_name",
                value: name
              },
              {
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: phone
              },
              {
                display_name: "Customer Email",
                variable_name: "customer_email",
                value: email
              }
            ]
          }
        })
      }
    );

    const result = await response.json();

    // ================= PAYSTACK ERROR =================

    if (!response.ok || !result.status || !result.data) {
      console.error(
        "Paystack initialization failed:",
        result
      );

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message:
            result.message ||
            "Unable to initialize payment"
        })
      };
    }

    // ================= SUCCESS =================

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        accessCode: result.data.access_code,
        reference: result.data.reference
      })
    };

  } catch (error) {

    console.error(
      "INITIALIZE PAYMENT ERROR:",
      error
    );

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Unable to initialize payment"
      })
    };
  }
};