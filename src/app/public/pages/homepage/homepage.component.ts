import { Component, computed, inject, OnInit, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewsListComponent } from "../../components/news-list/news-list.component";
import { convertToParamMap, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from '../../../share/interfaces/news.interface';
import { NewsService } from '../../services/news.service';
import { ResponseApi } from '../../../share/interfaces/resp-json-server-api.interface';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../../admin/services/token/token.service';

@Component({
  selector: 'app-homepage',
  imports: [NewsListComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  service = inject(NewsService)
  authservice = inject(TokenService)

  respPaginateRequest: Signal<ResponseApi<News>> = this.convertNewsObservatbleToSignal(this.service.getPaginate(4));

  news: Signal<News[]> = computed(() => this.respPaginateRequest().data);

  ngOnInit(): void {
    const test = this.authservice.getToken();
    console.log("Token enregistré", test);
  }

  convertNewsObservatbleToSignal(observable: Observable<ResponseApi<News>>): Signal<ResponseApi<News>> {
    // Create a default empty ResponseApi object with the correct structure
    const defaultValue: ResponseApi<News> = { data: [], first: 1, last: 1, next: null, prev: null, items: 0 };
    return toSignal(observable, { initialValue: defaultValue });
  }

}
