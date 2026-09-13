import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {

    // ✅ VERY IMPORTANT (fix for your issue)
    this.cartItems = this.cartService.getItems();

    // Optional (live updates)
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });

    console.log('CART ITEMS:', this.cartItems); // debug
  }

  increaseQty(item: any) {
    this.cartService.increaseQty(item.id);
  }

  decreaseQty(item: any) {
    this.cartService.decreaseQty(item.id);
  }

  removeItem(item: any) {
    this.cartService.removeItem(item.id);
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  beginCheckout() {
    this.analyticsService.event('begin_checkout', {
      currency: 'NGN',
      value: this.getTotal(),
      items: this.cartItems.map(item => ({
        item_id: item.id?.toString(),
        item_name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    });
  }
}
