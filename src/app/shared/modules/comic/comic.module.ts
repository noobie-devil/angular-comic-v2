import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { CoreModule } from 'src/app/core/core.module';

// import { ComicService } from 'src/app/core/services/comic.service';
import { ComicService } from './services/comic.service';
import { ComicEffects } from 'src/app/shared/modules/comic/store/effects/comic.effects';
import { reducers } from './store/comic.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('comics', reducers),
    EffectsModule.forFeature([ComicEffects]),
  ],
  providers: [
    ComicService
  ]
})
export class ComicModule { }
