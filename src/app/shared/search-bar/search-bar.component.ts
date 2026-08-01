import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  query: string = '';
  suggestions: Product[] = [];
  showSuggestions: boolean = false;

  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.suggestions = this.searchService.getProducts();
  }

  onInputChange() {
    const term = this.query.trim().toLowerCase();

    if (term.length < 2) {
      this.suggestions = [];
      this.showSuggestions = false;
      return;
    }

    const words: string[] = term.split(/\s+/);

    this.suggestions = this.searchService.getProducts()
      .filter(product => {

        const searchableText = [
          product.name,
          product.brand,
          product.model,
          product.category,
          product.group,
          product.parentCategory,
          product.description
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return words.every(word =>
          searchableText.includes(word)
        );

      })
      .slice(0, 8);

    this.showSuggestions = this.suggestions.length > 0;
  }

  selectSuggestion(product: Product) {

    console.log('✅ Suggestion clicked:', product.name);

    this.query = product.name;

    this.showSuggestions = false;

    this.router.navigate(['/product', product.id])

      .then(success => {

        console.log('Navigation successful:', success);

      })

      .catch(err => {

        console.error('Navigation failed:', err);

      });

  }
  onSearch() {
    if (this.query?.trim()) {
      console.log('🔍 Search triggered for:', this.query);

      this.router.navigate(['/shopcategories'], {
        queryParams: { search: this.query.trim() }
      }).then(success => {
        console.log('Search navigation successful:', success);
      }).catch(err => {
        console.error('Search navigation failed:', err);
      });

      this.showSuggestions = false;
    }
  }

  onBlur() {
    setTimeout(() => this.showSuggestions = false, 250);
  }

  getImageUrl(images: any): string {
    if (!images) {
      return '/assets/img/placeholder.jpg';
    }

    if (Array.isArray(images)) {
      const first = images[0];
      if (first) {
        return first.startsWith('/') ? first : '/' + first;
      }
    }

    const imgStr = images.toString().trim();
    return imgStr.startsWith('/') ? imgStr : '/' + imgStr;
  }
}