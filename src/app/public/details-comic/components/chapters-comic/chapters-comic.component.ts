import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';
import { getChaptersComicAction } from 'src/app/public/details-comic/store/actions/detailsComic.action';
import {
  errorSelector,
  isLoadingSelector,
  chaptersComicSelector,
} from 'src/app/public/details-comic/store/detailsComic.selectors';

@Component({
  selector: 'app-chapters-comic',
  templateUrl: './chapters-comic.component.html',
  styleUrls: ['./chapters-comic.component.scss']
})
export class ChaptersComicComponent implements OnInit {
  @Input("src") imgThumbnail: String;
  chaptersComic$: Observable<ChapterComic[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  slug: string;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('comicSeoAlias');
    this.chaptersComic$ = this.store.pipe(select(chaptersComicSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['comicSeoAlias'];
      this.fetchChaptersComic();
    });
  }

  fetchChaptersComic() {
    this.store.dispatch(getChaptersComicAction({ slug: this.slug }));
  }

  navigateToReadingPage(seoAlias: string) {
    this.router.navigateByUrl('title' + seoAlias);
  }
}
