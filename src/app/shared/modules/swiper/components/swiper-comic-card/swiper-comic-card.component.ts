import { Component, OnInit, Input } from '@angular/core';
import { WIDGET } from 'src/app/shared/modules/widget/widget.token';
import { Widget } from 'src/app/shared/modules/widget/widget.interface';
import { SwiperOptions } from 'swiper';
import { Comic } from 'src/app/core/models/comic.interface';
// import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-swiper-comic-card',
  templateUrl: './swiper-comic-card.component.html',
  styleUrls: ['./swiper-comic-card.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: SwiperComicCardComponent,
    },
  ],
})
export class SwiperComicCardComponent implements Widget {
  @Input() listComics: Comic[];

  config: SwiperOptions = {
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    slidesPerGroup: 5,
    spaceBetween: 20,
    centeredSlides: false,
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6
      },
    },
  };
  getData(){
    console.log('running');
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
