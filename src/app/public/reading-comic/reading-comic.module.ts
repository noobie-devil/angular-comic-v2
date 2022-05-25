import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule as PublicSharedModule } from 'src/app/public/shared/shared.module';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image'; // 

import { ReadingComicComponent } from './components/reading-comic/reading-comic.component';
import { ReadingHeaderComponent } from './components/reading-header/reading-header.component';
import { ReadingComicEffects } from 'src/app/public/reading-comic/store/effects/readingComic.effects';
import { reducers } from 'src/app/public/reading-comic/store/readingComic.reducers';


@NgModule({
  declarations: [
    ReadingComicComponent,
    ReadingHeaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PublicSharedModule,
    EffectsModule.forFeature([ReadingComicEffects]),
    StoreModule.forFeature('readingComic', reducers),
    LazyLoadImageModule
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  exports: [
    ReadingComicComponent
  ]
})
export class ReadingComicModule { }
