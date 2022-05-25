import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/modules/sidebar/services/category.service';
import {
	getCategoriesAction,
	getCategoriesSuccessAction,
	getCategoriesFailureAction,
} from 'src/app/shared/modules/sidebar/store/actions/getCategories.action';
import { Category } from 'src/app/core/models/category.interface';

@Injectable()
export class GetCategoriesEffect {

	constructor(private actions$: Actions, private categoryService: CategoryService) {}

	getCategories$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getCategoriesAction),
			switchMap(() => {
				return this.categoryService.getCategories().pipe(
					map((categories: Category[]) => {
						return getCategoriesSuccessAction({ categories });
					}),
					catchError(() => {
						return of(getCategoriesFailureAction());
					})
				);
			})
		)
	);
}