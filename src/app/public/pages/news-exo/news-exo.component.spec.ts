import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsExoComponent } from './news-exo.component';

describe('NewsExoComponent', () => {
  let component: NewsExoComponent;
  let fixture: ComponentFixture<NewsExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsExoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
