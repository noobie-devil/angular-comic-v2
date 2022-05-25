import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComicsState } from 'src/app/shared/modules/comic/types/comicsState.interface';
import { AppState } from 'src/app/core/models/app-state.interface';

export const comicsFeatureSelector = createFeatureSelector<
	AppState, 
	ComicsState
>('comics');

export const newComicsSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.newComics
);

export const hotComicsSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.hotComics
);

export const isLoadingSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.isLoading
);

export const errorSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.error
);




