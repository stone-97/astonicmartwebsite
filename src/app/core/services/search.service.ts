import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';
import { PPE_PRODUCTS } from '../data/ppe.data';
import { POWER_TOOL_PRODUCTS } from '../data/power-tools.data';
import { HAND_TOOL_PRODUCTS } from '../data/hand-tools.data';
import { MEASURING_TOOL_PRODUCTS } from '../data/measuring-tools.data';
import { SEALANTS_AND_ADHESIVES_PRODUCTS } from '../data/sealants-and-adhesives.data';
import { WORKSHOP_AND_GARAGE_PRODUCTS } from '../data/workshop_and_garage.data';
import { ELECTRICAL_EQUIPMENTS_PRODUCTS } from '../data/electrical_equipments.data';
import { CONSTRUCTION_EQUIPMENTS_PRODUCTS } from '../data/construction_equipments.data';
import { CLEANING_AND_GARDEN_SUPPLIES_PRODUCTS } from '../data/cleaning_and_garden_supplies.data';
import { FIRE_AND_TRAFFIC_SAFETY_PRODUCTS } from '../data/fire_and_traffic_safety.data';
import { LUBRICANTS_APPLICATION_PRODUCTS } from '../data/lubricants_applications.data';
import { PUMPING_MACHINES_PRODUCTS } from '../data/pumping_machines.data';
import { FARM_EQUIPMENTS_PRODUCTS } from '../data/farm_equipments.data';
import { MARINE_OFFSHORE_PRODUCTS } from '../data/marine_offshore.data';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySubject = new BehaviorSubject<string>('');
  currentSearchQuery$ = this.searchQuerySubject.asObservable();

  //  store products inside service for now
 private products: Product[] = [



// power tools start
// combokits
// starts at 1 to 1000
// ends at 2000

  ...POWER_TOOL_PRODUCTS,
// power tools end
   // ends at 2000
   

// start ppe start at 2000
// 2000 to 4000


   ...PPE_PRODUCTS,
  
// safety ppe ends at 4000




// sealant and adhesives starts
// 5001 to 7000

   ...SEALANTS_AND_ADHESIVES_PRODUCTS,




   // fire and traffic 
   ...FIRE_AND_TRAFFIC_SAFETY_PRODUCTS,
// fire and traffic safety ends at 9000


   // workshop and garage
   ...WORKSHOP_AND_GARAGE_PRODUCTS,

// Electrical equipments
// starts at 11001 
// ends at 13000
   ...ELECTRICAL_EQUIPMENTS_PRODUCTS,
  //  electrical equipments end at 13000

   ...MEASURING_TOOL_PRODUCTS,
// measuring and testing ends at 16000

   
   
   ...HAND_TOOL_PRODUCTS,
  //  hand tools ends at 19000



   // construction tools
   ...CONSTRUCTION_EQUIPMENTS_PRODUCTS,
   // start from 19001
   // ends at 21000


   //  pumping machines start at 21001
  // ends at 22000
...PUMPING_MACHINES_PRODUCTS,
// pumping machines ends at 22000


// cleaning and garden supplies
   ...CLEANING_AND_GARDEN_SUPPLIES_PRODUCTS,

//  cleaning and garden supplies ends at 24000

// farm tools

  //  start at 25000

   ...FARM_EQUIPMENTS_PRODUCTS,
  // farm equipments ends at 27000

// marine offshore
// start at 28000
   ...MARINE_OFFSHORE_PRODUCTS,
   // marine offshore at 30000




//  lubricants application and protective sprayer starts at 30001
  ...LUBRICANTS_APPLICATION_PRODUCTS,
// lubricants application and protective sprayer end

];
constructor() {
  this.checkForDuplicateIds();
}

private checkForDuplicateIds() {
  const ids = this.products.map(p => p.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  if (duplicates.length > 0) {
    throw new Error('❌ Duplicate Product IDs Found: ' + duplicates.join(', '));
  } else {
    console.log('✅ All product IDs are unique');
  }
}


getSimilarProducts(category: string, excludeId: number): Product[] {
    return this.products
      .filter(p => p.category === category)
      .filter(p => p.id !== excludeId)
      .slice(0, 6);
  }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query.trim());
  }

  clearSearch() {
    this.searchQuerySubject.next('');
  }

  // SEARCH LOGIC
  searchProducts(term: string): Product[] {

  if (!term.trim()) {
    return this.products;
  }

  const lower = term.toLowerCase();

  return this.products.filter(p =>
    p.name.toLowerCase().includes(lower) ||
    p.category.toLowerCase().includes(lower) ||
    p.brand.toLowerCase().includes(lower)
  );
}

  // get all products unfiltered
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }


  getDealsOfWeek(): Product[] {
  return [
    this.getProductById(13051),
    this.getProductById(60),
    this.getProductById(3),
    this.getProductById(109),
    this.getProductById(212),
    this.getProductById(6),
    this.getProductById(7),
    this.getProductById(8),
    this.getProductById(13017)
  ].filter(Boolean) as Product[];
}

  
  getProductsByCategory(category: string): Product[] {
    return this.products.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }



  getCategories(): string[] {
  const categories = this.products.map(product => product.category);
  return [...new Set(categories)];
}

getCategoriesByGroup(groupName: string): string[] {
  const categories = this.products?.filter((p: Product) => p.group === groupName)
                                   .map((p: Product) => p.category) ?? [];
  return categories;
}


  getCategoriesFromGroup(group: string) {
    const categories = this.products
      .filter(p => p.group === group)
      .map(p => p.category);

    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories.map(cat => ({
      name: cat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      link: '/' + cat
    }));
  }



  public get currentSearchQueryValue(): string {
    return this.searchQuerySubject.value;
  }
}



