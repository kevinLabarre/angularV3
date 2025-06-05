import { Component, Input } from '@angular/core';
import { News } from '../../../share/interfaces/news.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-long-card',
  imports: [DatePipe],
  templateUrl: './long-card.component.html',
  styleUrl: './long-card.component.css'
})
export class LongCardComponent {
  @Input() news?: News
}
