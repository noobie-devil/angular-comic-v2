import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/swiper/store/actionTypes';
import { Comic } from 'src/app/core/models/comic.interface';

export const getComicsAction = createAction(ActionTypes.GET_COMICS);

export const getComicsSuccessAction = createAction(
	ActionTypes.GET_COMICS_SUCCESS,
	props<{ comics: Comic[] }>()
);

export const getComicsFailureAction = createAction(
	ActionTypes.GET_COMICS_FAILURE
);