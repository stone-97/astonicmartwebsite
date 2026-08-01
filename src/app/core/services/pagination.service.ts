import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  currentPage: number = 1;
  itemPerPage: number = 6;
  totalPages: number = 1;

  constructor() {}

  calculateTotalpages(totalItems: number): number {
    this.totalPages = Math.ceil(totalItems / this.itemPerPage);
    return this.totalPages;
  }

  paginate<T>(items: T[], page: number = this.currentPage) {

    this.totalPages = Math.ceil(items.length / this.itemPerPage);

    this.currentPage = Math.min(Math.max(page, 1), this.totalPages || 1);

    const startIndex = (this.currentPage - 1) * this.itemPerPage;
    const endIndex = startIndex + this.itemPerPage;

    console.log(`pagination: page ${this.currentPage} of ${this.totalPages}`, { startIndex }, { endIndex });

    return items.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  setItemPerPage(count: number): void {
    this.itemPerPage = count;
  }

  reset(): void {
    this.currentPage = 1;
  }
}