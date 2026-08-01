import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadCart();
  }

  private loadCart() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const saved = localStorage.getItem('astonic_cart');

    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next(this.cartItems);
    }
  }

  private saveCart() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem('astonic_cart', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  addToCart(item: CartItem) {
    const existing = this.cartItems.find(p => p.id === item.id);

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }

    this.saveCart();
  }

  increaseQty(id: number) {
    const item = this.cartItems.find(p => p.id === id);

    if (item) {
      item.quantity++;
    }

    this.saveCart();
  }

  decreaseQty(id: number) {
    const item = this.cartItems.find(p => p.id === id);

    if (item && item.quantity > 1) {
      item.quantity--;
    }

    this.saveCart();
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== id);
    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  getItems() {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}