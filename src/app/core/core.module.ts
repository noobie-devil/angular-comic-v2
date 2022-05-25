import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicService } from './services/comic.service';
import { DetailsComicService } from './services/details-comic.service';
import { ChaptersComicService } from './services/chapters-comic.service';
import { UrlChapterImagesComicService } from './services/url-chapter-images-comic.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ComicService,
    DetailsComicService,
    ChaptersComicService,
    UrlChapterImagesComicService
  ]
})
export class CoreModule { }
