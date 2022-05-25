import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUrlChapterImagesComicAction } from 'src/app/public/reading-comic/store/actions/readingComic.action';

import {
  errorSelector,
  isLoadingSelector,
  chaptersComicSelector,
  currentChapterComicSeoAliasSelector,
  chaptersComicDictionarySelector,
  currentChapterComicSelector,
  detailsComicSelector,
  urlChapterImagesComicSelector
} from 'src/app/public/reading-comic/store/readingComic.selectors';

@Component({
  selector: 'app-reading-comic',
  templateUrl: './reading-comic.component.html',
  styleUrls: ['./reading-comic.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadingComicComponent implements OnInit {

  comicSlug: string;
  chapterComicSlug: string;
  currentChapterComicSeoAlias: string | null;
  urlChapterImagesComic$: Observable<string[] | null>;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;


  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.initializeValues();
    // this.initializeListeners();
  }

  initializeValues(): void {
    this.urlChapterImagesComic$ = this.store.pipe(select(urlChapterImagesComicSelector));
    this.store.pipe(select(currentChapterComicSeoAliasSelector)).subscribe((data: any) => {
      this.currentChapterComicSeoAlias = data;
      console.log("currentChapterComicSeoAlias from reading-comic component: " + this.currentChapterComicSeoAlias);
      if(this.currentChapterComicSeoAlias != null) {
        this.fetchData();
      }
    });
    
  }

  fetchData() {
    this.store.dispatch(getUrlChapterImagesComicAction({ currentChapterComicSeoAlias: this.currentChapterComicSeoAlias }));
  }

  initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.comicSlug = params['comicSeoAlias'];
      this.chapterComicSlug = params['chapterComicSeoAlias'];
      console.log(this.comicSlug);
      console.log(this.chapterComicSlug);

    });
  } 
}
