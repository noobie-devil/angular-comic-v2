import { Action, createReducer, on } from '@ngrx/store';
import {
	getDetailsComicAction,
	getDetailsComicSuccessAction,
	getDetailsComicFailureAction,
	getChaptersComicAction,
	getChaptersComicSuccessAction,
	getChaptersComicFailureAction,
	
} from 'src/app/public/details-comic/store/actions/detailsComic.action';
import { DetailsComicState } from 'src/app/public/details-comic/types/detailsComicState.interface';

const initialState: DetailsComicState = {
	data: null,
	chaptersComic: null,
	isLoading: false,
	error: null,
};

const DetailsComicReducer = createReducer(
	initialState,
	on(
		getDetailsComicAction,
		(state): DetailsComicState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getDetailsComicSuccessAction,
		(state, action): DetailsComicState => ({
			...state,
			isLoading: false,
			data: action.detailsComic,
		})
	),
	on(
		getDetailsComicFailureAction,
		(state): DetailsComicState => ({
			...state,
			isLoading: false,
		})
	),
	on(
		getChaptersComicAction,
		(state): DetailsComicState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getChaptersComicSuccessAction,
		(state, action): DetailsComicState => ({
			...state,
			isLoading: false,
			chaptersComic: action.chaptersComic,
		})
	),
	on(
		getChaptersComicFailureAction,
		(state): DetailsComicState => ({
			...state,
			isLoading: false,
		})
	),
	
);

export function reducers(state: DetailsComicState, action: Action) {
  return DetailsComicReducer(state, action);
}
