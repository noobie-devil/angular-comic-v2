import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/comic/store/actionTypes';
import { Comic } from 'src/app/core/models/comic.interface';

// export const getComicsAction = createAction(ActionTypes.GET_COMICS);

// export const getComicsSuccessAction = createAction(
// 	ActionTypes.GET_COMICS_SUCCESS,
// 	props<{ comics: Comic[] }>()
// );

// export const getComicsFailureAction = createAction(
// 	ActionTypes.GET_COMICS_FAILURE
// );


export const getHotComicsAction = createAction(ActionTypes.GET_HOT_COMICS);

export const getHotComicsSuccessAction = createAction(
	ActionTypes.GET_HOT_COMICS_SUCCESS,
	props<{ comics: Comic[] }>()
);

export const getHotComicsFailureAction = createAction(
	ActionTypes.GET_HOT_COMICS_FAILURE
);

export const getNewComicsAction = createAction(ActionTypes.GET_NEW_COMICS);

export const getNewComicsSuccessAction = createAction(
	ActionTypes.GET_NEW_COMICS_SUCCESS,
	props<{ comics: Comic[] }>()
);

export const getNewComicsFailureAction = createAction(
	ActionTypes.GET_NEW_COMICS_FAILURE
);