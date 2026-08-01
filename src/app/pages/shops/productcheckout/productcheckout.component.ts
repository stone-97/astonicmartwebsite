import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import * as emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Country, State } from 'country-state-city';

@Component({
  selector: 'app-productcheckout',
  templateUrl: './productcheckout.component.html',
  styleUrls: ['./productcheckout.component.css']
})
export class ProductcheckoutComponent implements OnInit {

  cartItems: any[] = [];
  depositPercent = 0.2;
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

  payWithPaystack() {
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_471a1c1ff03a8170fa899296864a028542971127',
      email: this.formData.email,
      amount: this.getTotal() * 100,
      currency: 'NGN',

      callback: async () => {

        const orderData = {
          orderId: this.orderId,
          paymentMethod: this.selectedPayment,
          total: this.totalAmount,
          customer: this.formData,
          items: this.cartItems
        };

        this.sendEmailsAfterPayment('Full Payment Completed');

        Swal.fire('Success', 'Payment successful', 'success');

        // ✅ SAVE
        localStorage.setItem('order', JSON.stringify(orderData));

        // ✅ CLEAR
        this.cartService.clearCart();

        setTimeout(() => {
          this.router.navigate(['/confirmation'], {
            state: { order: orderData }
          });
        }, 1500);
      },



      onClose: () => {
        Swal.fire('Cancelled', 'Payment not completed', 'warning');
      }
    });

    handler.openIframe();
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

    this.sendEmailsAfterPayment('50% Payment Made');

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


  sendEmailsAfterPayment(status: string) {

    const itemsList = this.cartItems
      .map(i => `${i.name} x${i.quantity}`)
      .join(', ');

    
    let deposit = 0;
    let balance = 0;

    if (this.selectedPayment === 'transfer') {
      deposit = Math.round(this.totalAmount * this.depositPercent);
      balance = this.totalAmount - deposit;
    }

    let paymentInfo = '';

    if (this.selectedPayment === 'cod') {
      paymentInfo = `Amount Due on Delivery: ₦${this.totalAmount}`;
    }

    if (this.selectedPayment === 'transfer') {
      paymentInfo = `20% Paid: ₦${deposit}
Balance on Delivery: ₦${balance}`;
    }

    if (this.selectedPayment === 'online') {
      paymentInfo = `Full Payment Received: ₦${this.totalAmount}`;
    }

    if (this.selectedPayment === 'quote') {
      paymentInfo = `Shipping costs, customs duties and taxes will be calculated and quoted separately.`;
    }
    const templateParams = {
      order_id: this.orderId,
      name: this.formData.firstName,
      phone: this.formData.phone,

      // ✅ sending email
      to_email: this.formData.email,

      // ✅ ADD THIS (for displaying email in template)
      email: this.formData.email,

      address: `${this.formData.address}, ${this.formData.city}, ${this.formData.state}, ${this.formData.country}`,
      items: itemsList,
      total: this.totalAmount,
      status: status,
      payment_info: paymentInfo,
      part_payment: this.selectedPayment === 'transfer' ? deposit : '',
      balance: this.selectedPayment === 'transfer' ? balance : ''
    };

    emailjs.send('service_rxui4gr', 'template_kuh2whe', templateParams)
      .then(() => console.log('ADMIN EMAIL SENT'))
      .catch(err => console.log('ADMIN EMAIL ERROR', err));

    emailjs.send('service_rxui4gr', 'template_3ls7gg4', templateParams)
      .then(() => console.log('USER EMAIL SENT'))
      .catch(err => console.log('USER EMAIL ERROR', err));
  }
}