import { Component, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../core/services/search.service';
import * as emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Country, State } from 'country-state-city';

@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.css']
})
export class GetAQuoteComponent implements OnInit {

  quoteForm!: FormGroup<{
    fullName: any;
    email: any;
    phone: any;
    altPhone: any;
    companyName: any;
    address: any;
    state: any;
    city: any;
    country: any; 
    product: any;
    message: any;
    agree: any;
  }>;
  countries: any[] = [];
  states: any[] = [];
  allProducts: any[] = [];
  products: any[] = [];
  selectedProducts: any[] = [];

  totalAmount = 0;
  deliveryMessage = '';

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  isLagos = false;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  get f(): any {
    return this.quoteForm.controls;
  }
  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      altPhone: [''],
      companyName: [''],
      address: ['', Validators.required],
      country: ['NG', Validators.required], // default Nigeria
      state: ['LA', Validators.required],   // default Lagos
      city: ['', Validators.required],
      product: [''],
      message: [''],
      agree: [false, Validators.requiredTrue]
    });

    // load all countries A-Z
    this.countries = Country.getAllCountries()
      .sort((a, b) => a.name.localeCompare(b.name));

    // load Nigeria states
    this.loadStates('NG');

    this.onStateChange();

    this.allProducts = this.searchService.getProducts();

    if (isPlatformBrowser(this.platformId)) {
      const nav = window.history.state;

      if (nav?.product) {
        this.addProduct(nav.product);
      }
    }
  }

  filterProducts(event: any) {
    const term = event.target.value.toLowerCase().trim();

    if (!term) {
      this.products = [];
      return;
    }

    const words: string[] = term.split(/\s+/);

    this.products = this.allProducts.filter(product => {
      const searchableText = [
        product.name,
        product.brand,
        product.model,
        product.category,
        product.group,
        product.parentCategory,
        product.description
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return words.every(word => searchableText.includes(word));
    }).slice(0, 20);
  }

  loadStates(countryCode: string) {
    this.states = State.getStatesOfCountry(countryCode)
      .sort((a, b) => a.name.localeCompare(b.name));

    // default Lagos if Nigeria
    if (countryCode === 'NG') {
      const lagos = this.states.find(s => s.isoCode === 'LA');

      this.quoteForm.patchValue({
        state: lagos ? lagos.isoCode : ''
      });
    } else {
      this.quoteForm.patchValue({
        state: ''
      });
    }

    this.onStateChange();
  }

  onCountryChange() {
    const country = this.quoteForm.value.country;

    if (!country) {
      this.states = [];
      this.deliveryMessage = '';
      return;
    }

    this.loadStates(country);
  }
  addProduct(product: any) {
    const existing = this.selectedProducts.find(p => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.selectedProducts.push({ ...product, quantity: 1 });
    }

    this.products = [];
    this.quoteForm.patchValue({ product: '' });

    this.calculateTotal();
  }

  removeProduct(i: number) {
    this.selectedProducts.splice(i, 1);
    this.calculateTotal();
  }

  onQtyChange(event: any, item: any) {
    const value = Number(event.target.value);
    item.quantity = value > 0 ? value : 1;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.selectedProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.cdr.detectChanges();
  }

  onStateChange() {
    const country = this.quoteForm.value.country;
    const state = this.quoteForm.value.state;

    if (!country || !state) {
      this.deliveryMessage = '';
      this.isLagos = false;
      return;
    }

    // 🇳🇬 Lagos rule
    if (country === 'NG' && state === 'LA') {
      this.deliveryMessage = '🚚 Lagos: Pay on delivery available.';
      this.isLagos = true;
      return;
    }

    this.isLagos = false;

    // 🇳🇬 Other Nigerian states
    if (country === 'NG') {
      this.deliveryMessage = '📦 Nigeria: 20% upfront may be required.';
      return;
    }

    // 🌍 International
    this.deliveryMessage = '🌍 International: Full payment required.';
  }

  submitQuote() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.quoteForm.invalid || this.selectedProducts.length === 0) {
      this.quoteForm.markAllAsTouched();
      this.errorMessage = 'Fill all required fields and add at least one product';
      return;
    }

    this.isSubmitting = true;

    const form = this.quoteForm.value;
    const total = this.totalAmount;

    const partPayment = Math.round(total * 0.2);
    const balance = total - partPayment;

    const itemsList = this.selectedProducts
      .map(i => `${i.name} x${i.quantity} = ₦${i.price * i.quantity}`)
      .join(', ');

    const itemsListWA = this.selectedProducts
      .map(i => `${i.name} x${i.quantity} = ₦${i.price * i.quantity}`)
      .join('\n');

    emailjs.send(
      'service_rxui4gr',
      'template_kuh2whe',
      {
        title: '📩 New Quote Request - Astonic Mart',
        status: 'QUOTE REQUEST',
        name: form.fullName,
        phone: form.phone,
        email: form.email,
        address: `${form.address}, ${form.city}, ${form.state}, ${form.country}`,
        items: itemsList,
        total,
        part_payment: partPayment,
        balance,
        message: form.message || 'Quote request'
      },
      { publicKey: 'F4cX3cLntLb5WG5ox' }
    )
      .then(() => {

        Swal.fire({
          icon: 'success',
          title: 'Quote Submitted!',
          text: 'Continue to WhatsApp',
          confirmButtonText: 'Continue'
        }).then(() => {

          this.quoteForm.reset();
          this.selectedProducts = [];
          this.totalAmount = 0;
          this.deliveryMessage = '';
          this.isSubmitting = false;

          this.sendToWhatsApp(itemsListWA, form, total);
        });

      })
      .catch(() => {
        this.isSubmitting = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      });
  }

  sendToWhatsApp(itemsListWA: string, form: any, total: number) {

    const partPayment = Math.round(total * 0.2);
    const balance = total - partPayment;

    const isLagos = form.country === 'NG' && form.state === 'LA';

    let paymentInfo = '';

    if (isLagos) {

      paymentInfo = `
🚚 *Lagos Delivery*
✔ Pay on delivery available
`;

    } else {

      paymentInfo = `
💳 *To proceed: Pay 20% (₦${partPayment})*

🏦 Bank: Fidelity Bank  
👤 Name: Astonic Technical Tools  
🔢 Account No: 5600969769  

📦 Balance on delivery: ₦${balance}

⚠️ Use your name or phone number as payment reference
`;

    }

    const message = `
📩 *QUOTE REQUEST*

👤 *${form.fullName}*
📞 ${form.phone}
📧 ${form.email}

📍 📍 ${form.address}, ${form.city}, ${form.state}, ${form.country},

🛒 *Items:*
${itemsListWA}

💰 *Total: ₦${total}*

${paymentInfo}

⚠️ Prices subject to confirmation
`;

    const url = `https://wa.me/2349074375786?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}