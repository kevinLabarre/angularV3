import { Component, inject, Input, Signal } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../../share/interfaces/news.interface';
import { NewsCardComponent } from "../news-card/news-card.component";
import { Router } from '@angular/router';
import { LongCardComponent } from "../long-card/long-card.component";
import { ErrorComponent } from "../../../share/components/error/error.component";

@Component({
  selector: 'app-news-list',
  imports: [NewsCardComponent, LongCardComponent, ErrorComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  service = inject(NewsService)

  @Input({ required: true }) news?: Signal<News[]>

  constructor(private router: Router) {
  }

  // Retourne 'true' si on est sur la page d'accueil
  get isHomepage(): boolean {
    return this.router.url === '/';
  }

}
