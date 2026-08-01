import { Component, OnInit } from '@angular/core';
import { Country, State } from 'country-state-city';

@Component({
  selector: 'app-bulkorders',
  templateUrl: './bulkorders.component.html',
  styleUrl: './bulkorders.component.css'
})
export class BulkordersComponent implements OnInit {

  countries: any[] = [];
  states: any[] = [];

  form = {
    name: '',
    phone: '',
    email: '',
    company: '',
    country: '',
    state: '',
    city: '',
    urgency: '',
    orderList: '',
    notes: ''
  };

  ngOnInit() {
    this.countries = Country.getAllCountries();

    const nigeria = this.countries.find(c => c.name === 'Nigeria');

    if (nigeria) {
      this.form.country = nigeria.isoCode;
      this.loadStates(nigeria.isoCode);
    }
  }

  loadStates(countryCode: string) {
    this.states = State.getStatesOfCountry(countryCode);

    if (countryCode === 'NG') {
      const lagos = this.states.find(s => s.name === 'Lagos');
      if (lagos) {
        this.form.state = lagos.isoCode;
      }
    }
  }

  submitBulkOrder() {

    // ✅ FIXED VALIDATION
    if (!this.form.name || !this.form.phone || !this.form.orderList || !this.form.state || !this.form.city) {
      alert('Please fill all required fields');
      return;
    }

    this.sendToWhatsApp();
  }

  sendToWhatsApp() {

    const message = `Hello Astonic Mart,

I want to request a bulk order:

👤 Name: ${this.form.name}
📞 Phone: ${this.form.phone}
📧 Email: ${this.form.email || 'Not provided'}
🏢 Company: ${this.form.company || 'N/A'}

📍 Location: ${this.form.city}, ${this.form.state}, ${this.form.country}

⏱ Delivery Time: ${this.form.urgency || 'Not specified'}

📦 Order List:
${this.form.orderList}

📝 Notes:
${this.form.notes || 'None'}
`;

    const phoneNumber = "2349074375786";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}