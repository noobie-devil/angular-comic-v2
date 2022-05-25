import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { KeyValue } from '@angular/common';

import { Observable } from 'rxjs';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';
import { getChaptersComicAction } from 'src/app/public/reading-comic/store/actions/readingComic.action';
import { getDetailsComicAction } from 'src/app/public/reading-comic/store/actions/readingComic.action';

import {
  errorSelector,
  isLoadingSelector,
  chaptersComicSelector,
  currentChapterComicSeoAliasSelector,
  chaptersComicDictionarySelector,
  currentChapterComicSelector,
  detailsComicSelector
} from 'src/app/public/reading-comic/store/readingComic.selectors';

@Component({
  selector: 'app-reading-header',
  templateUrl: './reading-header.component.html',
  styleUrls: ['./reading-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReadingHeaderComponent implements OnInit {

  // chaptersComic$: Observable<ChapterComic[] | null>;

  detailsComic$: Observable<DetailsComic | null>;
  currentChapterComicSeoAlias: string | null;

  chaptersComicDictionary$: Observable<{ [key: string]: ChapterComic } | null>;
  chaptersComicDictionary: { [key: string]: ChapterComic } | null;

  // currentChapterComic: ChapterComic;
  // currentChapterComic$: Observable<ChapterComic | null>;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  showingChaptersMenu: boolean = false;
  timeOut: any;

  comicSlug: string;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentChapterComicSeoAlias = this.router.url.split("/title")[1];
    this.initializeValues();
    this.initializeListeners();
    
  }

  public originalOrder(a: KeyValue<any, ChapterComic>, b: KeyValue<any, ChapterComic>): number {
    return 0;
  }

  initializeValues(): void {
    this.comicSlug = this.route.snapshot.paramMap.get('comicSeoAlias');
    this.detailsComic$ = this.store.pipe(select(detailsComicSelector));
    this.chaptersComicDictionary$ = this.store.pipe(select(chaptersComicDictionarySelector));
    
    this.store.pipe(select(currentChapterComicSeoAliasSelector)).subscribe((data: any) => {
      console.log("currentChapterComicSeoAlias from reading header: " + data);
    });



    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentChapterComicSeoAlias = this.router.url.split("/title")[1];
      this.comicSlug = params['comicSeoAlias'];
      this.fetchChaptersComic();
      this.fetchDetailsComic();
    });
  }

  backToDetailsPage() {
    this.router.navigateByUrl('title/' + this.comicSlug);
  }

  fetchChaptersComic() {
    this.store.dispatch(getChaptersComicAction({ currentChapterComicSeoAlias: this.currentChapterComicSeoAlias, comicSlug: this.comicSlug }));
  }

  fetchDetailsComic() {
    this.store.dispatch(getDetailsComicAction({ comicSlug: this.comicSlug }));
  }

  navigateToAnotherChapter(seoAlias: string) {
    this.router.navigateByUrl('title' + seoAlias);
  }

  clickEventShowChaptersMenu() {
    this.showingChaptersMenu = !this.showingChaptersMenu;
  }

  mouseOutEventListener() {
    if(this.showingChaptersMenu) {
      this.timeOut = setTimeout(() => {
        this.showingChaptersMenu = !this.showingChaptersMenu;
      }, 1000);
    }

  }

  mouseOverEventListener() {
    clearTimeout(this.timeOut);
  }
}
