import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import * as emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Country from 'country-state-city/lib/country';
import State from 'country-state-city/lib/state';

@Component({
  selector: 'app-productcheckout',
  templateUrl: './productcheckout.component.html',
  styleUrls: ['./productcheckout.component.css']
})
export class ProductcheckoutComponent implements OnInit {

  cartItems: any[] = [];
  depositPercent = 0.5;
  orderPlaced = false;
  orderId = '';
  totalAmount = 0;
  countries: any[] = [];
  states: any[] = [];
  selectedPayment: string = '';
  deliveryType: 'lagos' | 'outside' | 'international' | '' = '';
  deliveryMessage: string = '';

  acceptedTerms = false;

  formData = {
    firstName: '',
    lastName: '',
    phone: '',
    altPhone: '',
    email: '',
    company: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  };
  



  constructor(
    private cartService: CartService,
    private router: Router
  ) { }



  ngOnInit() {
    this.cartItems = this.cartService.getItems();

    // ✅ EmailJS (keep this)
    emailjs.init('F4cX3cLntLb5WG5ox');

    // ✅ NEW: Load countries
    this.countries = Country.getAllCountries();

    // ✅ NEW: Set Nigeria as default
    const nigeria = this.countries.find(c => c.name === 'Nigeria');

    if (nigeria) {
      this.formData.country = nigeria.isoCode;
      this.loadStates(nigeria.isoCode);
    }
  }
  loadStates(countryCode: string) {
    this.states = State.getStatesOfCountry(countryCode);

    // ✅ Set Lagos as default if Nigeria
    if (countryCode === 'NG') {
      const lagos = this.states.find(s => s.name === 'Lagos');
      if (lagos) {
        this.formData.state = lagos.isoCode;
      }
    }

    this.onCityChange();
  }


  getTotal() {
    return this.cartService.getTotal();
  }

  // ================= DELIVERY LOGIC (LAGOS ONLY) =================
  onCityChange() {
    const country = this.formData.country;
    const state = this.formData.state;

    if (!country || !state) {
      this.deliveryType = '';
      this.deliveryMessage = '';
      this.selectedPayment = '';
      return;
    }

    // 🇳🇬 Lagos
    if (country === 'NG' && state === 'LA') {
      this.deliveryType = 'lagos';
      this.deliveryMessage = '🚚 Lagos: Pay on delivery available';
      this.selectedPayment = 'cod';
      return;
    }

    // 🇳🇬 Other Nigeria states
    if (country === 'NG') {
      this.deliveryType = 'outside';
      this.deliveryMessage = '📦 Nigeria: Pay 50% now, balance on delivery';
      this.selectedPayment = 'transfer';
      this.totalAmount = this.getTotal();
      return;
    }

    // 🌍 International
    this.deliveryType = 'international';
    this.deliveryMessage =
      '🌍 International order request received. Shipping costs, customs duties and taxes will be calculated before payment.';
    this.selectedPayment = 'quote';
  }
  // ================= PLACE ORDER (COD ONLY) =================
  async placeOrder(form: any) {

    // ✅ NEW VALIDATION (ADD THIS)
    if (form.invalid) {
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      return;
    }

    // 👇 YOUR EXISTING CODE (UNCHANGED)

    if (!this.formData.firstName || !this.formData.email || !this.formData.phone) {
      Swal.fire('Error', 'Fill required fields', 'warning');
      return;
    }

    if (!this.deliveryType) {
      Swal.fire('Error', 'Enter your city', 'warning');
      return;
    }

    if (!this.acceptedTerms) {
      Swal.fire('Error', 'You must accept terms', 'warning');
      return;
    }

    if (!this.selectedPayment) {
      Swal.fire('Error', 'Select a payment method', 'warning');
      return;
    }

    this.orderId = 'AST-' + Math.floor(Math.random() * 100000);
    this.totalAmount = this.getTotal();

    if (this.selectedPayment === 'cod') {

      // ✅ CREATE ORDER DATA FIRST
      const orderData = {
        orderId: this.orderId,
        paymentMethod: this.selectedPayment,
        total: this.totalAmount,
        customer: this.formData,
        items: this.cartItems
      };

      // ✅ SEND EMAIL
      this.sendEmailsAfterPayment('Pay on Delivery');

      this.orderPlaced = true;
      Swal.fire('Success', 'Order placed (Pay on Delivery)', 'success');

      // ✅ SAVE ORDER
      localStorage.setItem('order', JSON.stringify(orderData));

      // ✅ PASS ORDER TO CONFIRMATION PAGE
      this.router.navigate(['/confirmation'], {
        state: { order: orderData }
      });

      // ✅ CLEAR CART LAST
      this.cartService.clearCart();

      return;
    }

    if (this.selectedPayment === 'transfer') {

      const orderData = {
        orderId: this.orderId,
        paymentMethod: this.selectedPayment,
        total: this.totalAmount,
        customer: this.formData,
        items: this.cartItems
      };

      this.orderPlaced = true;

      // ✅ SAVE ORDER
      localStorage.setItem('order', JSON.stringify(orderData));

      return;
    }


    if (this.selectedPayment === 'quote') {

      const orderData = {
        orderId: this.orderId,
        paymentMethod: 'International Quote',
        total: this.totalAmount,
        customer: this.formData,
        items: this.cartItems
      };

      // Send email to admin and customer
      this.sendEmailsAfterPayment('International Quote Requested');

      Swal.fire(
        'Request Submitted',
        'We will calculate shipping costs and send you a quotation.',
        'success'
      );

      localStorage.setItem('order', JSON.stringify(orderData));

      this.cartService.clearCart();

      this.router.navigate(['/confirmation'], {
        state: { order: orderData }
      });

      return;
    }

    if (this.selectedPayment === 'online') {
      this.payWithPaystack();
      return;
    }
  }

  async payWithPaystack() {
    try {
      // Card payment is ALWAYS the full order total
      const totalAmount = this.getTotal();

      if (!totalAmount || totalAmount <= 0) {
        Swal.fire(
          'Error',
          'Invalid order amount.',
          'error'
        );
        return;
      }

      if (!this.formData.email) {
        Swal.fire(
          'Error',
          'Customer email is required.',
          'warning'
        );
        return;
      }

      // Make sure we have an order ID
      if (!this.orderId) {
        this.orderId =
          'AST-' + Math.floor(Math.random() * 100000);
      }

      this.totalAmount = totalAmount;

      // ==========================================
      // STEP 1: INITIALIZE PAYMENT ON NETLIFY
      // ==========================================

      const response = await fetch(
        '/.netlify/functions/initialize-payment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.formData.email,
            amount: totalAmount,
            orderId: this.orderId,
            name: this.formData.firstName,
            phone: this.formData.phone
          })
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error(
          'Paystack initialization error:',
          result
        );

        Swal.fire(
          'Payment Error',
          result.message ||
          'Unable to initialize payment.',
          'error'
        );

        return;
      }

      const accessCode = result.accessCode;
      const reference = result.reference;

      if (!accessCode || !reference) {
        Swal.fire(
          'Payment Error',
          'Paystack did not return a valid payment reference.',
          'error'
        );

        return;
      }

      // ==========================================
      // STEP 2: OPEN PAYSTACK
      // ==========================================

      const PaystackPop = (window as any).PaystackPop;

      if (!PaystackPop) {
        Swal.fire(
          'Payment Error',
          'Paystack could not be loaded. Please refresh the page.',
          'error'
        );

        return;
      }

      const paystack = new PaystackPop();

      paystack.resumeTransaction(accessCode, {

        onSuccess: async (transaction: any) => {

          console.log(
            'Paystack transaction:',
            transaction
          );

          // ==========================================
          // STEP 3: VERIFY PAYMENT ON NETLIFY
          // ==========================================

          try {

            const verifyResponse = await fetch(
              '/.netlify/functions/verify-payment',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  reference:
                    transaction.reference || reference,

                  expectedAmount:
                    totalAmount
                })
              }
            );

            const verification =
              await verifyResponse.json();

            console.log(
              'Paystack verification:',
              verification
            );

            if (
              !verifyResponse.ok ||
              !verification.success
            ) {

              Swal.fire(
                'Payment Verification Failed',
                verification.message ||
                'We could not verify your payment.',
                'error'
              );

              return;
            }

            // ==========================================
            // STEP 4: PAYMENT IS VERIFIED
            // ==========================================

            const orderData = {
              orderId: this.orderId,

              paymentMethod: 'online',

              total: totalAmount,

              customer: this.formData,

              items: this.cartItems,

              paymentReference:
                verification.reference,

              paymentStatus: 'paid',

              paymentChannel:
                verification.channel
            };

            // Send email only AFTER verification
            await this.sendEmailsAfterPayment(
              'Full Payment Completed'
            );

            // Save verified order
            localStorage.setItem(
              'order',
              JSON.stringify(orderData)
            );

            this.orderPlaced = true;

            // Clear cart only after verified payment
            this.cartService.clearCart();

            await Swal.fire(
              'Payment Successful',
              'Your payment has been verified successfully.',
              'success'
            );

            // Go to confirmation
            this.router.navigate(
              ['/confirmation'],
              {
                state: {
                  order: orderData
                }
              }
            );

          } catch (error) {

            console.error(
              'Payment verification error:',
              error
            );

            Swal.fire(
              'Verification Error',
              'We could not verify the payment. Please contact us before trying again.',
              'error'
            );
          }
        },

        onCancel: () => {

          Swal.fire(
            'Payment Cancelled',
            'Your card payment was not completed.',
            'warning'
          );

        }

      });

    } catch (error) {

      console.error(
        'Paystack payment error:',
        error
      );

      Swal.fire(
        'Payment Error',
        'Something went wrong while starting the payment.',
        'error'
      );
    }
  }

  confirmPayment() {

    const orderData = {
      orderId: this.orderId,
      paymentMethod: this.selectedPayment,
      total: this.totalAmount,
      customer: this.formData,
      items: this.cartItems
    };

    Swal.fire('Success', 'Payment recorded. We will verify shortly.', 'success');

    this.sendEmailsAfterPayment('50% Payment Reported');

    // ✅ SAVE ORDER
    localStorage.setItem('order', JSON.stringify(orderData));

    // ✅ CLEAR CART
    this.cartService.clearCart();

    // ✅ PASS ORDER TO CONFIRMATION
    this.router.navigate(['/confirmation'], {
      state: { order: orderData }
    });
  }

  
  // ================= EMAIL (ADMIN + CUSTOMER) =================
  async sendEmailsAfterPayment(status: string) {

    const itemsList = this.cartItems
      .map(i => `${i.name} x${i.quantity}`)
      .join(', ');

    const formatAmount = (amount: number) =>
      new Intl.NumberFormat('en-NG').format(amount);

    let adminPaymentInfo = '';
    let customerPaymentInfo = '';

    // =====================================================
    // LAGOS - PAY ON DELIVERY
    // =====================================================
    if (status === 'Pay on Delivery') {

      adminPaymentInfo =
        `Payment Method: Pay on Delivery

No payment has been made.
Payment will be collected when the order is delivered.`;

      customerPaymentInfo =
        `Payment Method: Pay on Delivery

Payment will be collected when your order is delivered.`;
    }

    // =====================================================
    // OUTSIDE LAGOS - 50% BANK TRANSFER
    // =====================================================
    else if (status === '50% Payment Reported') {

      const deposit = Math.round(this.totalAmount * 0.5);
      const balance = this.totalAmount - deposit;

      adminPaymentInfo =
        `Payment Method: Bank Transfer

50% Payment Made: ₦${formatAmount(deposit)}
Balance on Delivery: ₦${formatAmount(balance)}

The customer has reported making the 50% payment.
Please verify the payment before processing the order.`;

      customerPaymentInfo =
        `Payment Method: Bank Transfer

50% Payment Made: ₦${formatAmount(deposit)}
Balance on Delivery: ₦${formatAmount(balance)}

Your 50% payment has been reported.
We will verify the payment and begin processing your order once the payment is confirmed.`;
    }

    // =====================================================
    // CARD - FULL PAYMENT
    // =====================================================
    else if (status === 'Full Payment Completed') {

      adminPaymentInfo =
        `Payment Method: Card

Full Payment Received: ₦${formatAmount(this.totalAmount)}

Payment has been successfully verified by Paystack.
The order is fully paid and can be processed.`;

      customerPaymentInfo =
        `Payment Method: Card

Full Payment Received: ₦${formatAmount(this.totalAmount)}

Your payment has been successfully verified.
Your order will now be processed.`;
    }

    // =====================================================
    // INTERNATIONAL
    // =====================================================
    else if (status === 'International Quote Requested') {

      adminPaymentInfo =
        `Payment Method: International Quote

Shipping costs, customs duties and taxes are to be calculated and quoted separately.
No payment has been made at this stage.`;

      customerPaymentInfo =
        `Payment Method: International Quote

Your order request has been received.
Shipping costs, customs duties and taxes will be calculated and quoted separately before payment is required.`;
    }

    // =====================================================
    // FALLBACK
    // =====================================================
    else {

      adminPaymentInfo = `Payment Status: ${status}`;
      customerPaymentInfo = `Payment Status: ${status}`;
    }


    // =====================================================
    // EMAIL DATA
    // =====================================================

    const templateParams = {

      order_id: this.orderId,

      name: this.formData.firstName,

      phone: this.formData.phone,

      to_email: this.formData.email,

      email: this.formData.email,

      address:
        `${this.formData.address}, ${this.formData.city}, ${this.formData.state}, ${this.formData.country}`,

      items: itemsList,

      total: this.totalAmount,

      status: status,

      // Separate messages
      admin_payment_info: adminPaymentInfo,

      customer_payment_info: customerPaymentInfo,

      // Keep these in case your admin template still uses them
      part_payment:
        status === '50% Payment Reported'          ? Math.round(this.totalAmount * 0.5)
          : '',

    
        balance:
      status === '50% Payment Reported'
          ? this.totalAmount -
          Math.round(this.totalAmount * 0.5)
          : ''
    };


    // =====================================================
    // CUSTOMER EMAIL
    // =====================================================

    try {

      const customerResponse = await emailjs.send(
        'service_rxui4gr',
        'template_3ls7gg4',
        templateParams
      );

      console.log(
        'CUSTOMER EMAIL SENT SUCCESSFULLY:',
        customerResponse
      );

    } catch (error) {

      console.error(
        'CUSTOMER EMAIL FAILED:',
        error
      );
    }


    // =====================================================
    // ADMIN EMAIL
    // =====================================================

    try {

      const adminResponse = await emailjs.send(
        'service_rxui4gr',
        'template_kuh2whe',
        templateParams
      );

      console.log(
        'ADMIN EMAIL SENT SUCCESSFULLY:',
        adminResponse
      );

    } catch (error) {

      console.error(
        'ADMIN EMAIL FAILED:',
        error
      );
    }
  }
}
