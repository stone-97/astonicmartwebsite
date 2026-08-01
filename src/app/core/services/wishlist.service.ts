import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlistItems: any[] = [];

  private wishlistSubject =
    new BehaviorSubject<any[]>([]);

  wishlist$ =
    this.wishlistSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {

    if (isPlatformBrowser(this.platformId)) {

      const saved =
        localStorage.getItem(
          'astonic_wishlist'
        );

      if (saved) {
        this.wishlistItems =
          JSON.parse(saved);
      }

    }

    this.wishlistSubject.next(
      this.wishlistItems
    );

  }

  addToWishlist(product: any) {

    const exists =
      this.wishlistItems.find(
        item => item.id === product.id
      );

    if (!exists) {

      this.wishlistItems.push(product);

      this.saveWishlist();

    }

  }

  getItems() {

    return this.wishlistItems;

  }

  removeItem(id: number) {

    this.wishlistItems =
      this.wishlistItems.filter(
        item => item.id !== id
      );

    this.saveWishlist();

  }

  private saveWishlist() {

    if (
      isPlatformBrowser(
        this.platformId
      )
    ) {

      localStorage.setItem(
        'astonic_wishlist',
        JSON.stringify(
          this.wishlistItems
        )
      );

    }

    this.wishlistSubject.next(
      this.wishlistItems
    );

  }

}