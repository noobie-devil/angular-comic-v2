import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SwiperComicCardComponent } from './components/swiper-comic-card/swiper-comic-card.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicService } from 'src/app/core/services/comic.service';
import { ComicEffects } from 'src/app/shared/modules/swiper/store/effects/comic.effects';
import { reducers } from './store/comic.reducers';


@NgModule({
  declarations: [
    SwiperComicCardComponent,
    ComicCardComponent
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    RouterModule,
  ],
  exports: [
    SwiperComicCardComponent,
    ComicCardComponent
  ]
})
export class SwiperModule { }
