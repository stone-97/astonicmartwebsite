import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  private compareItems: any[] = [];

  private compareSubject = new BehaviorSubject<any[]>([]);
  compare$ = this.compareSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('astonic_compare');

      if (saved) {
        this.compareItems = JSON.parse(saved);
        this.compareSubject.next(this.compareItems);
      }
    }
  }

  addToCompare(product: any) {
    const exists = this.compareItems.find(
      item => item.id === product.id
    );

    if (!exists) {
      this.compareItems.push(product);
      this.saveCompare();
    }
  }

  getItems() {
    return this.compareItems;
  }

  removeItem(id: number) {
    this.compareItems =
      this.compareItems.filter(item => item.id !== id);

    this.saveCompare();
  }

  private saveCompare() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(
      'astonic_compare',
      JSON.stringify(this.compareItems)
    );

    this.compareSubject.next(this.compareItems);
  }
}