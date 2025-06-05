import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, input, Input, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  // NEXT
  // @Output() handleNext = new EventEmitter<void>();
  // @Input() nextDesabled = signal(false);

  // PREV
  // @Output() handlePrev = new EventEmitter<void>();
  // @Input() prevDesabled = signal(false);

  // Click sur le chiffre du paginator
  @Output() handleChangePage = new EventEmitter<number>();

  @Input() desabled = ({
    next: false,
    prev: false,
    numbers: false
  });

  // @Input() paginatorInfo = ({
  //   lastPage: 5,
  //   currentPage: 1
  // });

  paginatorInfo = input({
    lastPage: 0,
    currentPage: 1
  });

  // Pour ajout du ngIf qui enlève le paginator quand pas de pages
  pages = computed(() => this.paginatorInfo().lastPage > 1);

  buttonsArray: Signal<number[]> = computed(() => {
    const array = [];
    for (let i = 1; i <= this.paginatorInfo().lastPage; i++) {
      array.push(i);
    }
    return array
  })

  handleNextClick(): void {
    this.handleChangePage.emit(this.paginatorInfo().currentPage + 1);
  }

  handlePrevClick(): void {
    this.handleChangePage.emit(this.paginatorInfo().currentPage - 1);
  }

  getVisiblePages(): number[] {
    const currentPage = this.paginatorInfo().currentPage;
    const lastPage = this.paginatorInfo().lastPage;

    // Create an array to hold visible page numbers
    const visiblePages: number[] = [];

    // Calculate the range of pages to show (current page and one on each side)
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(lastPage, currentPage + 1);

    // Add the pages to the visible array
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  }

}
