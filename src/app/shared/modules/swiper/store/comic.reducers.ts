import { Action, createReducer, on } from '@ngrx/store';
import {
	getComicsAction,
	getComicsSuccessAction,
	getComicsFailureAction,
} from 'src/app/shared/modules/swiper/store/actions/getComics.action';
import { ComicsState } from 'src/app/shared/modules/swiper/types/comicsState.interface';

const initialState: ComicsState = {
	data: null,
	isLoading: false,
	error: null,
};

const comicsReducer = createReducer(
	initialState,
	on(
		getComicsAction,
		(state): ComicsState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getComicsSuccessAction,
		(state, action): ComicsState => ({
			...state,
			isLoading: false,
			data: action.comics,
		})
	),
	on(
		getComicsFailureAction,
		(state): ComicsState => ({
			...state,
			isLoading: false,
		})
	)	
);

export function reducers(state: ComicsState, action: Action) {
  return comicsReducer(state, action);
}
