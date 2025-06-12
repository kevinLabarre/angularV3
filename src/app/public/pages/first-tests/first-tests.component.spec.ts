import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestsComponent } from './first-tests.component';

describe('FirstTestsComponent', () => {
  let component: FirstTestsComponent;
  let fixture: ComponentFixture<FirstTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
