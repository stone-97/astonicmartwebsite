import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../core/models/Product';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { CompareService } from '../../core/services/compare.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Input() itemsPerPage: number = 12;

  currentPage = 1;
  sortOption = 'default';

constructor(
  private router: Router,
  private cartService: CartService,
  private wishlistService: WishlistService,
  private compareService: CompareService
) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.currentPage = 1;
    }
  }

  // This getter now properly reacts to sorting and pagination changes
  get paginatedProducts(): Product[] {
    if (!this.products || this.products.length === 0) return [];

    let sortedProducts = [...this.products];

    // Apply Sorting
    switch (this.sortOption) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Default: keep original order
        break;
    }

    // Apply Pagination
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return sortedProducts.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  // ====================== Pagination ======================
  prevPage(e?: Event) {
    if (e) e.preventDefault();
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(e?: Event) {
    if (e) e.preventDefault();
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(page: number, e?: Event) {
    if (e) e.preventDefault();
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getVisiblePages(): number[] {
    const total = this.totalPages;
    if (total <= 1) return [];
    const current = this.currentPage;
    const maxVisible = 5;
    let start = Math.max(current - 2, 1);
    let end = Math.min(start + maxVisible - 1, total);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  // ====================== Filter Bar Events ======================
  onSortChange(event: any) {
    this.sortOption = event.target.value;
    this.currentPage = 1; // Reset to first page when sorting changes
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = +event.target.value;
    this.currentPage = 1; // Reset to first page
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images?.[0]
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
  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Added to wishlist',
      text: product.name,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }

  addToCompare(product: Product) {
    this.compareService.addToCompare(product);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: 'Added to compare',
      text: product.name,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }

}
