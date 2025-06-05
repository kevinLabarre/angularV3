import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../../share/interfaces/news.interface';
import { ResponseApi } from '../../share/interfaces/resp-json-server-api.interface';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  http = inject(HttpClient);

  // Get ALL
  getNews(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:3000/actualites')
  }

  // GetPaginate
  // Docs et exemple : https://github.com/typicode/json-

  getPaginate(per_page: number, page: number = 1) {
    return this.http.get<ResponseApi<News>>(`http://localhost:3000/actualites?_page=${page}&_per_page=${per_page}`)
  }



}
