import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/sidebar/store/actionTypes';
import { Category } from 'src/app/core/models/category.interface';

export const getCategoriesAction = createAction(ActionTypes.GET_CATEGORIES);

export const getCategoriesSuccessAction = createAction(
	ActionTypes.GET_CATEGORIES_SUCCESS,
	props<{ categories: Category[] }>()
);

export const getCategoriesFailureAction = createAction(
	ActionTypes.GET_CATEGORIES_FAILURE
);