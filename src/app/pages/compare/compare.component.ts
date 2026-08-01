import { Component, OnInit } from '@angular/core';
import { CompareService } from '../../core/services/compare.service';
import { Product } from '../../core/models/Product';
import { CartService } from '../../core/services/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compareItems: Product[] = [];

  constructor(
    private compareService: CompareService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.compareItems = this.compareService.getItems();
  }

  remove(id: number) {
    this.compareService.removeItem(id);
    this.compareItems = this.compareService.getItems();
  }

  hasField(field: keyof Product): boolean {
    return this.compareItems.some(item => !!item[field]);
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