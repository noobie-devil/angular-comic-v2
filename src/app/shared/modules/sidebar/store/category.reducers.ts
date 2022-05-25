import { Action, createReducer, on } from '@ngrx/store';
import {
	getCategoriesAction,
	getCategoriesSuccessAction,
	getCategoriesFailureAction,
} from 'src/app/shared/modules/sidebar/store/actions/getCategories.action';
import { CategoriesState } from 'src/app/shared/modules/sidebar/types/categoriesState.interface';

const initialState: CategoriesState = {
	data: null,
	isLoading: false,
	error: null,
};

const categoriesReducer = createReducer(
	initialState,
	on(
		getCategoriesAction,
		(state): CategoriesState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getCategoriesSuccessAction,
		(state, action): CategoriesState => ({
			...state,
			isLoading: true,
			data: action.categories,
		})
	),
	on(
		getCategoriesFailureAction,
		(state): CategoriesState => ({
			...state,
			isLoading: false,
		})
	)	
);

export function reducers(state: CategoriesState, action: Action) {
  return categoriesReducer(state, action);
}
