import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistItems: Product[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist() {
    this.wishlistItems = this.wishlistService.getItems();
  }

  remove(id: number) {
    this.wishlistService.removeItem(id);
    this.loadWishlist();

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Removed from wishlist',
      showConfirmButton: false,
      timer: 2000
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0]
    });

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Added to cart',
      text: product.name,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }
}