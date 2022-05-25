import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComicsState } from 'src/app/shared/modules/swiper/types/comicsState.interface';
import { AppState } from 'src/app/core/models/app-state.interface';

export const comicsFeatureSelector = createFeatureSelector<
	AppState, 
	ComicsState
>('comics');

export const comicsSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.data
);

export const isLoadingSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.isLoading
);

export const errorSelector = createSelector(
	comicsFeatureSelector,
	(comicsState: ComicsState) => comicsState.error
);