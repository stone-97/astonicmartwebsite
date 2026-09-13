import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

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
export class ProductListComponent implements OnChanges, OnInit {

  @Input() products: Product[] = [];
  @Input() itemsPerPage: number = 12;

  currentPage = 1;
  sortOption = 'default';

  private urlPage = 1;
  /*
   * Holds the randomized order of the products.
   *
   * We keep this separate from the @Input() products
   * so that the original product array is not modified.
   */
  private shuffledProducts: Product[] = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private compareService: CompareService
  ) { }


  // =========================================================
  // INITIALIZE
  // =========================================================

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      const pageParam = Number(params['page']);

      this.urlPage =
        Number.isInteger(pageParam) && pageParam >= 1
          ? pageParam
          : 1;

      /*
       * Apply the requested page only when it
       * exists in the current product list.
       */
      if (this.urlPage <= this.totalPages) {

        this.currentPage = this.urlPage;

      } else {

        this.currentPage = 1;

      }

    });

  }


  // =========================================================
  // INPUT CHANGES
  // =========================================================

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['products']) {

      this.shuffledProducts =
        this.shuffleProducts(this.products);

      /*
       * Restore the page requested by the URL
       * after the new products have been loaded.
       */
      if (this.urlPage >= 1 && this.urlPage <= this.totalPages) {

        this.currentPage = this.urlPage;

      } else {

        this.currentPage = 1;

      }

    }


    if (changes['itemsPerPage']) {

      /*
       * Keep the current URL page if it is still valid.
       * Otherwise return to page 1.
       */
      if (
        this.currentPage < 1 ||
        this.currentPage > this.totalPages
      ) {

        this.currentPage = 1;

      }

    }

  }

  // =========================================================
  // RANDOMIZE PRODUCTS
  // =========================================================

  private shuffleProducts(
    products: Product[]
  ): Product[] {

    /*
     * Make a copy.
     *
     * This prevents us from changing the original
     * products array coming from the parent/SearchService.
     */

    const shuffled = [...products];


    /*
     * Fisher-Yates shuffle
     *
     * This creates a proper random order.
     */

    for (
      let i = shuffled.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(Math.random() * (i + 1));


      [
        shuffled[i],
        shuffled[j]
      ] = [
          shuffled[j],
          shuffled[i]
        ];

    }


    return shuffled;

  }


  // =========================================================
  // PAGINATED PRODUCTS
  // =========================================================

  get paginatedProducts(): Product[] {

    if (
      !this.shuffledProducts ||
      this.shuffledProducts.length === 0
    ) {

      return [];

    }


    /*
     * Make another copy before sorting.
     *
     * This keeps the randomized order intact.
     */

    let sortedProducts =
      [...this.shuffledProducts];


    // =======================================================
    // SORTING
    // =======================================================

    switch (this.sortOption) {

      case 'price-low':

        sortedProducts.sort(
          (a, b) => a.price - b.price
        );

        break;


      case 'price-high':

        sortedProducts.sort(
          (a, b) => b.price - a.price
        );

        break;


      case 'name-asc':

        sortedProducts.sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        );

        break;


      default:

        /*
         * Default sorting:
         *
         * Keep the randomized order.
         */

        break;

    }


    // =======================================================
    // PAGINATION
    // =======================================================

    const start =
      (this.currentPage - 1) *
      this.itemsPerPage;


    return sortedProducts.slice(
      start,
      start + this.itemsPerPage
    );

  }


  // =========================================================
  // TOTAL PAGES
  // =========================================================

  get totalPages(): number {

    if (
      !this.shuffledProducts ||
      this.shuffledProducts.length === 0
    ) {

      return 1;

    }


    return Math.ceil(
      this.shuffledProducts.length /
      this.itemsPerPage
    );

  }


  // =========================================================
  // PREVIOUS PAGE
  // =========================================================

  prevPage(e?: Event): void {

    if (e) {
      e.preventDefault();
    }


    if (this.currentPage > 1) {

      this.goToPage(
        this.currentPage - 1
      );

    }

  }


  // =========================================================
  // NEXT PAGE
  // =========================================================

  nextPage(e?: Event): void {

    if (e) {
      e.preventDefault();
    }


    if (
      this.currentPage <
      this.totalPages
    ) {

      this.goToPage(
        this.currentPage + 1
      );

    }

  }


  // =========================================================
  // GO TO PAGE
  // =========================================================

  goToPage(
    page: number,
    e?: Event
  ): void {

    if (e) {
      e.preventDefault();
    }


    if (
      page < 1 ||
      page > this.totalPages
    ) {

      return;

    }


    /*
     * Instead of only changing:
     *
     * this.currentPage = page
     *
     * we update the URL.
     *
     * This creates a browser-history entry.
     */

    this.router.navigate([], {

      relativeTo: this.route,

      queryParams: {
        page: page
      },

      /*
       * Keep any other query parameters
       * that may already exist on the page.
       */

      queryParamsHandling: 'merge'

    });

  }


  // =========================================================
  // VISIBLE PAGE NUMBERS
  // =========================================================

  getVisiblePages(): number[] {

    const total =
      this.totalPages;


    if (total <= 1) {

      return [];

    }


    const current =
      this.currentPage;


    const maxVisible = 5;


    let start =
      Math.max(
        current - 2,
        1
      );


    let end =
      Math.min(
        start + maxVisible - 1,
        total
      );


    if (
      end - start <
      maxVisible - 1
    ) {

      start =
        Math.max(
          end - maxVisible + 1,
          1
        );

    }


    return Array.from(
      {
        length:
          end - start + 1
      },
      (_, i) =>
        start + i
    );

  }


  // =========================================================
  // SORTING
  // =========================================================

  onSortChange(event: any): void {

    this.sortOption =
      event.target.value;


    /*
     * Sorting starts from page 1.
     */

    this.currentPage = 1;

  }


  // =========================================================
  // ITEMS PER PAGE
  // =========================================================

  onItemsPerPageChange(event: any): void {

    this.itemsPerPage =
      +event.target.value;


    /*
     * Return to page 1 when the
     * number of products changes.
     */

    this.currentPage = 1;

  }


  // =========================================================
  // ADD TO CART
  // =========================================================

  addToCart(product: Product): void {

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


  // =========================================================
  // ADD TO WISHLIST
  // =========================================================

  addToWishlist(product: Product): void {

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


  // =========================================================
  // ADD TO COMPARE
  // =========================================================

  addToCompare(product: Product): void {

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