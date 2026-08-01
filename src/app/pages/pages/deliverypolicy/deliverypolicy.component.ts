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
        <strong>Lagos (Island & Mainland), Abuja, Port Harcourt, Kano, Onitsha, Ibadan</strong> and other major cities and towns.
      </p>
      <ul>
        <li><strong>Free Delivery within Lagos</strong> for eligible products.</li>
        <li>Free delivery may also apply to selected major cities depending on the product and logistics route.</li>
        <li>For challenging or remote locations, delivery charges <em>may or may not apply</em>.</li>
        <li>Pre-order is required for all deliveries outside Lagos.</li>
        <li>Full payment is required for international deliveries.</li>
      </ul>
      <p class="text-muted">Delivery timeline: same-day within Lagos; 2–5 working days to other states.</p>
    </div>
  </div>

  <!-- Step 2: Delivery Timeframe -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">2. Delivery Timeframe</h5>
      <ul>
        <li><strong>Within Lagos:</strong> Same-day delivery for eligible items (orders before 12 PM), standard delivery 1 working day.</li>
        <li><strong>Outside Lagos:</strong> 2–5 working days depending on location.</li>
        <li><strong>International Deliveries:</strong> Vary by destination, shipping begins after full payment confirmation.</li>
        <li>Orders are processed within 24 hours after confirmation.</li>
      </ul>
    </div>
  </div>

  <!-- Step 3: Delivery Fees -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">3. Delivery Fees</h5>
      <ul>
        <li><strong>Lagos:</strong> Free delivery on eligible products; small handling fee may apply for heavy items.</li>
        <li><strong>Major Cities:</strong> Free or discounted depending on product, order size, and logistics.</li>
        <li><strong>Other States:</strong> Charges may apply depending on distance, accessibility, and courier availability.</li>
        <li><strong>International:</strong> Fees based on destination, package weight, customs; full payment required before shipping.</li>
      </ul>
    </div>
  </div>

  <!-- Step 4: Heavy & Industrial Tools -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">4. Heavy & Industrial Tools</h5>
      <p>Some large equipment — such as <strong>pressure washers, scrubbers, ladders, generators, industrial vacuums</strong> — require special handling due to size, weight, and value.</p>
      <ul>
        <li>Some items may require <strong>full payment before delivery</strong>, especially high-value items or deliveries outside Lagos.</li>
        <li>Certain items may qualify for <strong>free delivery</strong> within Lagos depending on size and logistics.</li>
        <li>Additional logistics charges may apply only when necessary.</li>
        <li>Pre-order confirmation is required for all heavy/bulky items outside Lagos.</li>
      </ul>
    </div>
  </div>

  <!-- Step 5: Order Processing -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">5. Order Processing</h5>
      <ul>
        <li>Orders are processed within 24 hours after confirmation.</li>
        <li>Pre-order items are processed once availability and delivery details are verified.</li>
        <li>Heavy/industrial items may require full payment before processing.</li>
        <li>Customers receive updates via WhatsApp, SMS, email, or phone.</li>
        <li>Delivery addresses must be accurate to avoid failed deliveries.</li>
      </ul>
    </div>
  </div>

  <!-- Step 6: Failed Delivery & Re-Delivery -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">6. Failed Delivery & Re-Delivery</h5>
      <ul>
        <li>Failed deliveries can occur due to incorrect address, unreachable customer, or refusal to accept the order.</li>
        <li>A re-delivery fee may apply; customers will be informed before rescheduling.</li>
        <li>Non-claimed prepaid orders are held for 48 hours while attempts to reach the customer are made.</li>
        <li>Heavy items may incur additional handling fees for failed delivery.</li>
      </ul>
    </div>
  </div>

  <!-- Step 7: Damaged or Missing Items -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">7. Damaged or Missing Items</h5>
      <ul>
        <li>Report damaged or missing items within 24 hours with photo/video proof.</li>
        <li>Replacement or refund handled according to our Return Policy.</li>
      </ul>
    </div>
  </div>

  <!-- Step 8: Contact for Delivery Issues -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">8. Contact for Delivery Issues</h5>
      <p>For delivery updates or support, contact us at:</p>
      <ul>
        <li>📞 Phone/WhatsApp: <strong>+234 XXX XXX XXXX</strong></li>
        <li>📧 Email: <strong>supportastonicmart.com</strong></li>
      </ul>
      <p>Our team is available to help with tracking, confirming delivery, or handling complaints.</p>
    </div>
  </div>
</div>

    </div>
  `,
  styleUrls: ['./deliverypolicy.component.css']  // optional
})
export class DeliverypolicyComponent {}
