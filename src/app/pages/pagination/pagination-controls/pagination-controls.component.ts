import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrl: './pagination-controls.component.css'
})
export class PaginationControlsComponent implements OnChanges{

  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  visiblePages: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentPage'] || changes['totalPages']) {
      this.calculateVisiblePages();
    }
  }

  private calculateVisiblePages() {
    const maxVisible = 5;
    let start = Math.max(this.currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, this.totalPages);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    this.visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  prev() {
    if (this.currentPage > 1) this.pageChange.emit(this.currentPage - 1);
  }

  next() {
    if (this.currentPage < this.totalPages) this.pageChange.emit(this.currentPage + 1);
  }

  goTo(page: number) {
    if (page >= 1 && page <= this.totalPages) this.pageChange.emit(page);
  }

}
