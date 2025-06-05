import { Component, computed, effect, inject, signal, Signal } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ResponseApi } from '../../../share/interfaces/resp-json-server-api.interface';
import { News } from '../../../share/interfaces/news.interface';
import { NewsListComponent } from '../../components/news-list/news-list.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-news-page',
  imports: [NewsListComponent, PaginatorComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {

  constructor() {
    effect(() => {
      const page = this.paginationManagement();
      this.loadNews();
    });
  }

  service = inject(NewsService);

  responseApi = signal<ResponseApi<News>>({ data: [], first: 1, last: 1, next: null, prev: null, items: 0 });

  // Dès que ca change, renvoie la requete loadComponent
  paginationManagement = signal({ currentPage: 1, numberElement: 6 });

  // Computed pour avoir des "news" de type "signal<News[]>"
  news: Signal<News[]> = computed(() => this.responseApi().data);

  // Gère l'état desable/enable des boutons
  desabledPaginatorButtons = computed(() => (
    {
      next: this.responseApi().next === null ? true : false,
      prev: this.responseApi().prev === null ? true : false,
      numbers: false
    })
  );

  // Pour afficher les infos de navigation
  paginatorInfo = computed(() => {
    const page = this.responseApi().prev;
    return {
      lastPage: this.responseApi().last,
      currentPage: page ? page + 1 : 1
    }
  });

  loadNews(): void {
    this.service.getPaginate(this.paginationManagement().numberElement, this.paginationManagement().currentPage).subscribe(data => this.responseApi.set(data));
  }

  goToPageWithPageNumber(page: number): void {
    console.log("parent", page);
    this.paginationManagement.update(state => ({ ...state, currentPage: page }));
  }

}
