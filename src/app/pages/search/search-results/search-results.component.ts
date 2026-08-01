import { SearchService } from './../../../core/services/search.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/Product';
import { ActivatedRoute, Route } from '@angular/router';
import { DUMMY_PRODUCTS } from '../../../core/models/DummyProduct';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{
  query: string = '';
  results: Product[] = [];

  constructor(private route: ActivatedRoute, private searchService: SearchService){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      this.performSearch();
    });

    // Optional: listen to service for future live search
    this.searchService.currentSearchQuery$.subscribe(q => {
      this.query = q;
      this.performSearch();
    });
  }

  performSearch(){
    if(!this.query){
      this.results = [];
      return
    }

    const term = this.query.toLocaleLowerCase().trim();

    this.results = DUMMY_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    );
  }
}
