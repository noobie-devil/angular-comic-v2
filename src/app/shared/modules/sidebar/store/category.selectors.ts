import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState } from 'src/app/shared/modules/sidebar/types/categoriesState.interface';
import { AppState } from 'src/app/core/models/app-state.interface';

export const categoriesFeatureSelector = createFeatureSelector<
	AppState, 
	CategoriesState
>('categories');

export const categoriesSelector = createSelector(
	categoriesFeatureSelector,
	(categoriesState: CategoriesState) => categoriesState.data
);

export const isLoadingSelector = createSelector(
	categoriesFeatureSelector,
	(categoriesState: CategoriesState) => categoriesState.isLoading
);

export const errorSelector = createSelector(
	categoriesFeatureSelector,
	(categoriesState: CategoriesState) => categoriesState.error
);