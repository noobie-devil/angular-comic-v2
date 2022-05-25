import { Action, createReducer, on } from '@ngrx/store';
import {
	getHotComicsAction,
	getHotComicsSuccessAction,
	getHotComicsFailureAction,
	getNewComicsAction,
	getNewComicsSuccessAction,
	getNewComicsFailureAction,
} from 'src/app/shared/modules/comic/store/actions/getComics.action';
import { ComicsState } from 'src/app/shared/modules/comic/types/comicsState.interface';

const initialState: ComicsState = {
	hotComics: null,
	newComics: null,
	isLoading: false,
	error: null,
};

const comicsReducer = createReducer(
	initialState,
	on(
		getHotComicsAction,
		(state): ComicsState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getHotComicsSuccessAction,
		(state, action): ComicsState => ({
			...state,
			isLoading: true,
			hotComics: action.comics,
		})
	),
	on(
		getHotComicsFailureAction,
		(state): ComicsState => ({
			...state,
			isLoading: false,
		})
	),
	on(
		getNewComicsAction,
		(state): ComicsState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getNewComicsSuccessAction,
		(state, action): ComicsState => ({
			...state,
			isLoading: true,
			newComics: action.comics,
		})
	),
	on(
		getNewComicsFailureAction,
		(state): ComicsState => ({
			...state,
			isLoading: false,
		})
	),
		
);

export function reducers(state: ComicsState, action: Action) {
  return comicsReducer(state, action);
}
