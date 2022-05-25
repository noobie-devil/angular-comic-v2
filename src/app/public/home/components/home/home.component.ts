import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getHotComicsAction, getNewComicsAction} from 'src/app/shared/modules/comic/store/actions/getComics.action';
import {
  errorSelector,
  isLoadingSelector,
  newComicsSelector,
  hotComicsSelector
} from 'src/app/shared/modules/comic/store/comic.selectors';
import { Comic } from 'src/app/core/models/comic.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotComics$: Observable<Comic[] | null>;
  newComics$: Observable<Comic[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  initializeValue(): void {
    this.hotComics$ = this.store.pipe(select(hotComicsSelector));
    this.newComics$ = this.store.pipe(select(newComicsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

  }

  fetchData(): void {
    this.store.dispatch(getHotComicsAction());
    this.store.dispatch(getNewComicsAction());
  }

}
