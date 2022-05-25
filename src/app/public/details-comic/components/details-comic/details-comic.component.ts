import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';
import { getDetailsComicAction } from 'src/app/public/details-comic/store/actions/detailsComic.action';
import {
  errorSelector,
  isLoadingSelector,
  detailsComicSelector,
  chaptersComicSelector
} from 'src/app/public/details-comic/store/detailsComic.selectors';

@Component({
  selector: 'app-details-comic',
  templateUrl: './details-comic.component.html',
  styleUrls: ['./details-comic.component.scss']
})
export class DetailsComicComponent implements OnInit {
  detailsComic: DetailsComic | null;
  detailsComic$: Observable<DetailsComic | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  firstChapterComic: ChapterComic | null;
  slug: string;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('comicSeoAlias');
    this.store.pipe(select(chaptersComicSelector)).subscribe((data: any) => {
      if(data != null) {
        this.firstChapterComic = data[0];
      }
    });

    this.detailsComic$ = this.store.pipe(select(detailsComicSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['comicSeoAlias'];
      this.fetchDetailsComic();
    });
  } 

  fetchDetailsComic() {
    this.store.dispatch(getDetailsComicAction({ slug: this.slug }));
  }

}
