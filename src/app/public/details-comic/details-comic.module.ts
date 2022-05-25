import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { SharedModule as PublicSharedModule } from 'src/app/public/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReadingComicModule } from 'src/app/public/reading-comic/reading-comic.module';

import { ReadingComicComponent } from 'src/app/public/reading-comic/components/reading-comic/reading-comic.component';
import { DetailsComicComponent } from './components/details-comic/details-comic.component';
import { DetailsComicEffects } from 'src/app/public/details-comic/store/effects/detailsComic.effects';
import { reducers } from 'src/app/public/details-comic/store/detailsComic.reducers';
import { ChaptersComicComponent } from './components/chapters-comic/chapters-comic.component';
import { PageNotFoundComponent } from 'src/app/public/error-pages/components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    DetailsComicComponent,
    ChaptersComicComponent
  ],
  imports: [
    CommonModule,
    PublicSharedModule,
    ReadingComicModule,
    CoreModule,
    RouterModule,
    EffectsModule.forFeature([DetailsComicEffects]),
    StoreModule.forFeature('detailsComic', reducers),
  ],
  exports: [
    DetailsComicComponent
  ]
})
export class DetailsComicModule { }
