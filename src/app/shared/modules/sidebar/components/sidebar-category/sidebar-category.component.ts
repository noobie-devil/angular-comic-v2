import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCategoriesAction } from 'src/app/shared/modules/sidebar/store/actions/getCategories.action';
import {
  errorSelector,
  isLoadingSelector,
  categoriesSelector
} from 'src/app/shared/modules/sidebar/store/category.selectors';
import { Category } from 'src/app/core/models/category.interface';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.scss']
})

export class SidebarCategoryComponent implements OnInit {
  categories$: Observable<Category[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  initializeValue(): void {
    this.categories$ = this.store.pipe(select(categoriesSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getCategoriesAction());
  }
}
