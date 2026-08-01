import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

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
}
