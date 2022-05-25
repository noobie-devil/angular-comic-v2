import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailsComicState } from 'src/app/public/details-comic/types/detailsComicState.interface';
import { AppState } from 'src/app/core/models/app-state.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';

export const detailsComicFeatureSelector = createFeatureSelector<
	AppState, 
	DetailsComicState
>('detailsComic');

export const detailsComicSelector = createSelector(
	detailsComicFeatureSelector,
	(detailsComicState: DetailsComicState) => detailsComicState.data,
);


export const chaptersComicSelector = createSelector(
	detailsComicFeatureSelector,
	(detailsComicState: DetailsComicState) => detailsComicState.chaptersComic,
)

export const isLoadingSelector = createSelector(
	detailsComicFeatureSelector,
	(detailsComicState: DetailsComicState) => detailsComicState.isLoading
);

export const errorSelector = createSelector(
	detailsComicFeatureSelector,
	(detailsComicState: DetailsComicState) => detailsComicState.error
);