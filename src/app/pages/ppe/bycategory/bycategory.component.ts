import { Component } from '@angular/core';

@Component({
  selector: 'app-bycategory',
  templateUrl: './bycategory.component.html',
  styleUrl: './bycategory.component.css'
})
export class BycategoryComponent {

  
     products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('Combo Kits');
      }
}
