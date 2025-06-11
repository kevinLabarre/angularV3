import { Component, computed, effect, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { News } from '../../../share/interfaces/news.interface';
import { NewsService } from '../../services/news.service';
import { ResponseApi } from '../../../share/interfaces/resp-json-server-api.interface';
import { NewsListComponent } from "../../components/news-list/news-list.component";

@Component({
  selector: 'app-news-exo',
  imports: [NewsListComponent],
  templateUrl: './news-exo.component.html',
  styleUrl: './news-exo.component.css'
})
export class NewsExoComponent {

  constructor() {
    effect(() => {
      const INFO = this.paginationManagement();
      this.loadNews()
    })
  }

  service = inject(NewsService)

  responseApi: WritableSignal<ResponseApi<News>> = signal({
    data: [], // List des news
    first: 1,
    items: 0,
    last: 1,
    next: null,
    prev: null
  })

  news: Signal<News[]> = computed(() => this.responseApi().data)

  // Créé un tableau du nombre de taille égale à "last"
  paginationTable = computed(() => Array.from({ length: this.responseApi().last }))

  // Signal qui sera lié à mon "effect"
  // Le changement de se signal pour relancer mon effect
  paginationManagement: WritableSignal<{ per_page: number, page: number }> = signal({ per_page: 6, page: 1 })

  loadNews() {
    this.service.getPaginate(this.paginationManagement().per_page, this.paginationManagement().page).subscribe({
      next: data => {
        this.responseApi.set(data);
        console.log(this.responseApi());
      },
      error: err => console.log(err)
    })
  }

  changePage(page: number) {
    // this.paginationManagement.update(prevValue => { return { per_page: prevValue.per_page, page: page } })
    this.paginationManagement.update(prevValue => { return { ...prevValue, page: page } })
  }

  nextPage() {
    if (this.responseApi().next !== null)
      this.changePage(this.responseApi().next!)
  }

  prevPage() {
    if (this.responseApi().prev !== null)
      this.changePage(this.responseApi().prev!)
  }

}
