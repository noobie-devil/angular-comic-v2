import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperComicCardComponent } from './swiper-comic-card.component';

describe('SwiperComicCardComponent', () => {
  let component: SwiperComicCardComponent;
  let fixture: ComponentFixture<SwiperComicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperComicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperComicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
