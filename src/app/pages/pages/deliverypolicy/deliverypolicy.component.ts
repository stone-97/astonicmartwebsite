import { Component } from '@angular/core';

@Component({
  selector: 'app-deliverypolicy',
  template: `
    <div class="container my-5">
      <h2 class="mb-4 text-primary"></h2>

      <!-- Delivery Policy Page – Astonic Mart -->
      <div class="container my-5">
        <h2 class="mb-4 text-primary">Delivery Policy</h2>

        <!-- Step 1: Delivery Locations -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">1. Delivery Locations</h5>

            <p class="card-text">
              Astonic Mart delivers to customers across Nigeria. We currently service:
              <strong>Lagos (Island & Mainland), Abuja, Port Harcourt, Kano, Onitsha, Ibadan</strong>
              and other major cities and towns.
            </p>

            <ul>
              <li>
                <strong>Free Delivery within Lagos</strong> is available for eligible products and orders.
              </li>

             <li>
  Some low-value products may require the customer to pay the applicable delivery fee.
</li>
              <li>
                Customers purchasing multiple items may qualify for free or discounted delivery depending on the total order value, quantity, product, and logistics cost.
              </li>

              <li>
                Free or discounted delivery may also apply to selected major cities depending on the product and logistics route.
              </li>

              <li>
                Additional delivery charges may apply to remote or difficult-to-reach locations.
              </li>

              <li>
                Pre-order confirmation may be required for certain deliveries outside Lagos.
              </li>

              <li>
  International orders require a shipping quote before payment.
</li>
            </ul>

            <p class="text-muted">
              Delivery timeline: same-day within Lagos for eligible orders; 2–5 working days to other states.
            </p>
          </div>
        </div>

        <!-- Step 2: Delivery Timeframe -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">2. Delivery Timeframe</h5>

            <ul>
              <li>
                <strong>Within Lagos:</strong>
                Same-day delivery for eligible items (orders before 12 PM), standard delivery 1 working day.
              </li>

              <li>
                <strong>Outside Lagos:</strong>
                2–5 working days depending on location.
              </li>

            <li>
  <strong>International Deliveries:</strong>
  Vary by destination; shipping arrangements and payment requirements will be confirmed after the shipping quote.
</li>

              <li>
                Orders are processed within 24 hours after confirmation.
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 3: Delivery Fees -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">3. Delivery Fees</h5>

            <ul>
              <li>
                <strong>Lagos:</strong>
                Eligible products and orders may qualify for free delivery.
                Delivery charges may apply to low-value or low-margin products,
                selected orders, or locations where delivery costs are relatively high.
              </li>

              <li>
                <strong>Multiple-Item Orders:</strong>
                Customers purchasing multiple products may qualify for free or discounted delivery
                depending on the combined order value, quantity, product type, and logistics cost.
              </li>

<li>
  <strong>Outside Lagos Orders ₦50,000 and Above:</strong>
  A 20% payment is required before processing, with the remaining balance payable on delivery.
</li>

              <li>
                <strong>Major Cities:</strong>
                Free, discounted, or customer-paid delivery may apply depending on the product,
                order size, destination, and logistics route.
              </li>

              <li>
                <strong>Other States:</strong>
                Charges may apply depending on distance, accessibility, package size,
                weight, and courier availability.
              </li>

              <li>
                <strong>International:</strong>
                Fees are based on destination, package weight, and applicable customs or shipping requirements.
                Full payment is required before shipping.
              </li>
            </ul>

            <p class="text-muted">
              Where a delivery fee applies, the applicable charge will be communicated
              to the customer before the order is dispatched.
            </p>
          </div>
        </div>

        <!-- Step 4: Heavy & Industrial Tools -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">4. Heavy & Industrial Tools</h5>

            <p>
              Some large equipment — such as
              <strong>pressure washers, scrubbers, ladders, generators, industrial vacuums</strong> —
              require special handling due to size, weight, and value.
            </p>

            <ul>
              <li>
                Some items may require <strong>full payment before delivery</strong>,
                especially high-value items or deliveries outside Lagos.
              </li>

              <li>
                Certain items may qualify for <strong>free delivery</strong> within Lagos
                depending on size, order value, and logistics.
              </li>

              <li>
                Additional logistics charges may apply where necessary due to the size,
                weight, destination, or handling requirements of the item.
              </li>

              <li>
                Pre-order confirmation is required for all heavy/bulky items outside Lagos.
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 5: Order Processing -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">5. Order Processing</h5>

            <ul>
              <li>
                Orders are processed within 24 hours after confirmation.
              </li>

              <li>
                Pre-order items are processed once availability and delivery details are verified.
              </li>

              <li>
                Heavy/industrial items may require full payment before processing.
              </li>

              <li>
                Customers receive updates via WhatsApp, SMS, email, or phone.
              </li>

              <li>
                Delivery addresses must be accurate to avoid failed deliveries.
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 6: Failed Delivery & Re-Delivery -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">6. Failed Delivery & Re-Delivery</h5>

            <ul>
              <li>
                Failed deliveries can occur due to incorrect address,
                unreachable customer, or refusal to accept the order.
              </li>

              <li>
                A re-delivery fee may apply; customers will be informed before rescheduling.
              </li>

              <li>
                Non-claimed prepaid orders are held for 48 hours while attempts
                to reach the customer are made.
              </li>

              <li>
                Heavy items may incur additional handling fees for failed delivery.
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 7: Damaged or Missing Items -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">7. Damaged or Missing Items</h5>

            <ul>
              <li>
                Report damaged or missing items within 24 hours with photo/video proof.
              </li>

              <li>
                Replacement or refund handled according to our Return Policy.
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 8: Contact for Delivery Issues -->
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">8. Contact for Delivery Issues</h5>

            <p>For delivery updates or support, contact us at:</p>

            <ul>
              <li>
                📞 Phone/WhatsApp:
                <strong>+234 907 437 5786</strong>
              </li>

              <li>
                📧 Email:
             <strong>support&#64;astonicmart.com</strong>
              </li>
            </ul>

            <p>
              Our team is available to help with tracking, confirming delivery,
              or handling complaints.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./deliverypolicy.component.css']
})
export class DeliverypolicyComponent { }