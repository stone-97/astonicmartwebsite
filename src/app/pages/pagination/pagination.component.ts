import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { Subscription } from 'rxjs';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  private searchSubscription!: Subscription;

  // Filter state
  uniqueBrands: string[] = [];
  uniqueCategories: string[] = [];
  selectedBrands: string[] = [];
  selectedCategories: string[] = [];
  minPrice: number = 0;
  maxPrice: number = Infinity;

  filteredProducts: Product[] = [];
  priorityCategory: string = '';
  priorityBrand: string = '';
  priorityParentCategory: string = '';
  priorityGroup: string = '';
constructor(
  private router: Router,
  private route: ActivatedRoute,
  private searchService: SearchService,
) { }

  ngOnInit(): void {
    this.loadUniqueFilters();

    this.route.queryParams.subscribe(params => {

      const priority = params['priority'];
      const brand = params['brand'];
      const parentCategory = params['parentCategory'];
      const group = params['group'];

      this.priorityCategory = priority || '';
      this.priorityBrand = brand || '';
      this.priorityParentCategory = parentCategory || '';
      this.priorityGroup = group || '';
      const query =
        this.searchService.currentSearchQueryValue;

      this.applyFilters(query);
    });

    this.searchSubscription =
      this.searchService.currentSearchQuery$.subscribe(query => {
        this.applyFilters(query);
      });
  }
  private loadUniqueFilters() {
    const allProducts = this.searchService.getProducts();
    this.uniqueBrands = [...new Set(allProducts.map((p) => p.brand))].sort();
    this.uniqueCategories = [
      ...new Set(allProducts.map((p) => p.category)),
    ].sort();
  }

  applyFilters(searchQuery: string = '') {

    let list = this.searchService.getProducts();

    // Search query
    if (searchQuery?.trim()) {
      list = this.searchService.searchProducts(searchQuery);
    }

    // Brand filter
    if (this.selectedBrands.length > 0) {
      list = list.filter(
        p => this.selectedBrands.includes(p.brand)
      );
    }

    // Category filter
    if (this.selectedCategories.length > 0) {
      list = list.filter(
        p => this.selectedCategories.includes(p.category)
      );
    }

    // Price filter
    if (this.minPrice > 0 || this.maxPrice < Infinity) {
      list = list.filter(
        p => p.price >= this.minPrice &&
          p.price <= this.maxPrice
      );
    }
    // PRIORITY BRAND
    if (this.priorityBrand) {

      let prioritized = list.filter(
        p =>
          p.brand?.toLowerCase().trim() ===
          this.priorityBrand.toLowerCase().trim()
      );

      // FILTER BY PARENT CATEGORY
      if (this.priorityParentCategory) {
        prioritized = prioritized.filter(
          p =>
            p.parentCategory?.toLowerCase().trim() ===
            this.priorityParentCategory.toLowerCase().trim()
            ||
            p.group?.toLowerCase().trim() ===
            this.priorityParentCategory.toLowerCase().trim()
        );
      }

      // FILTER BY GROUP
      if (this.priorityGroup) {
        prioritized = prioritized.filter(
          p =>
            p.group?.toLowerCase().trim() ===
            this.priorityGroup.toLowerCase().trim()
        );
      }

      const others = list.filter(product => !prioritized.includes(product));

      this.filteredProducts = [
        ...prioritized,
        ...others
      ];
    }

    
    // PRIORITY CATEGORY FIRST
    else if (this.priorityCategory) {

      const prioritized = list.filter(
        p =>
          p.category.toLowerCase().trim() ===
          this.priorityCategory.toLowerCase().trim()
      );

      const others = list.filter(
        p =>
          p.category.toLowerCase().trim() !==
          this.priorityCategory.toLowerCase().trim()
      );

      this.filteredProducts = [
        ...prioritized,
        ...others
      ];
    }
    else {
      this.filteredProducts = list;
    }
  }



  toggleBrandFilter(brand: string) {
    const idx = this.selectedBrands.indexOf(brand);
    if (idx > -1) this.selectedBrands.splice(idx, 1);
    else this.selectedBrands.push(brand);
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  toggleCategoryFilter(cat: string) {
    const idx = this.selectedCategories.indexOf(cat);
    if (idx > -1) this.selectedCategories.splice(idx, 1);
    else this.selectedCategories.push(cat);
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }


  removeBrand(brand: string) {
    this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  removeCategory(cat: string) {
    this.selectedCategories = this.selectedCategories.filter(c => c !== cat);
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  clearFilters() {
    this.selectedBrands = [];
    this.selectedCategories = [];
    this.minPrice = 0;
    this.maxPrice = Infinity;
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
  }
}