import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/public/details-comic/store/actionTypes';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';


export const getDetailsComicAction = createAction(
	ActionTypes.GET_DETAILS_COMIC,
	props<{ slug: string }>()
);

export const getDetailsComicSuccessAction = createAction(
	ActionTypes.GET_DETAILS_COMIC_SUCCESS,
	props<{ detailsComic: DetailsComic }>()
);

export const getDetailsComicFailureAction = createAction(
	ActionTypes.GET_DETAILS_COMIC_FAILURE
);

export const getChaptersComicAction = createAction(
	ActionTypes.GET_CHAPTERS_COMIC,
	props<{ slug: string }>()
);

export const getChaptersComicSuccessAction = createAction(
	ActionTypes.GET_CHAPTERS_COMIC_SUCCESS,
	props<{ chaptersComic: ChapterComic[] }>()
);

export const getChaptersComicFailureAction = createAction(
	ActionTypes.GET_CHAPTERS_COMIC_FAILURE
);
