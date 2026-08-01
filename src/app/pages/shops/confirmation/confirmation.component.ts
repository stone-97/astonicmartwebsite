import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: any = null;

  ngOnInit() {

    // ✅ FIRST: check navigation (fresh order)
    const nav = history.state;

    if (nav && nav.order) {
      this.order = nav.order;

      // ✅ save latest order
      localStorage.setItem('order', JSON.stringify(this.order));
    } else {

      // ✅ fallback to storage
      const data = localStorage.getItem('order');
      this.order = data ? JSON.parse(data) : null;
    }

    console.log('ORDER:', this.order);
  }

  // ✅ FIX IMAGE HERE (IMPORTANT)
  fixImage(img: string): string {
    if (!img) return 'assets/img/placeholder.jpg';

    // remove ../../../ if present
    img = img.replace(/^(\.\.\/)+/, '');

    // allow external images
    if (img.startsWith('http')) return img;

    // ensure correct assets path
    if (!img.startsWith('assets')) {
      return 'assets/' + img;
    }

    return img;
  }
}