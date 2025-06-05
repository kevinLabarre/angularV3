import { Component, Input } from '@angular/core';
import { News } from '../../../share/interfaces/news.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {

  @Input() news?: News

}
