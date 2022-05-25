import { Action, createReducer, on } from '@ngrx/store';
import {
	getChaptersComicAction,
	getChaptersComicSuccessAction,
	getChaptersComicFailureAction,
	getDetailsComicAction,
	getDetailsComicSuccessAction,
	getDetailsComicFailureAction,
	getUrlChapterImagesComicAction,
	getUrlChapterImagesComicSuccessAction,
	getUrlChapterImagesComicFailureAction,
	
} from 'src/app/public/reading-comic/store/actions/readingComic.action';
import { ReadingComicState } from 'src/app/public/reading-comic/store/types/readingComicState.interface';

const initialState: ReadingComicState = {
	currentChapterComicSeoAlias: null,
	chaptersComicDictionary: null,
	urlChapterImagesComic: null,
	chaptersComic: null,
	detailsComic: null,
	isLoading: false,
	error: null,
};

const ReadingComicReducer = createReducer(
	initialState,
	on(
		getUrlChapterImagesComicAction,
		(state): ReadingComicState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getUrlChapterImagesComicSuccessAction,
		(state, action): ReadingComicState => ({
			...state,
			isLoading: false,
			urlChapterImagesComic: action.urlChapterImagesComic,
		})
	),
	on(
		getUrlChapterImagesComicFailureAction,
		(state): ReadingComicState => ({
			...state,
			isLoading: false,
		})
	),
	on(
		getDetailsComicAction,
		(state): ReadingComicState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getDetailsComicSuccessAction,
		(state, action): ReadingComicState => ({
			...state,
			isLoading: false,
			detailsComic: action.detailsComic,
		})
	),
	on(
		getDetailsComicFailureAction,
		(state): ReadingComicState => ({
			...state,
			isLoading: false,
		})
	),
	on(
		getChaptersComicAction,
		(state): ReadingComicState => ({
			...state,
			isLoading: true,
		})
	),
	on(
		getChaptersComicSuccessAction,
		(state, action): ReadingComicState => ({
			...state,
			isLoading: false,
			chaptersComicDictionary: action.chaptersComicDictionary,
			currentChapterComicSeoAlias: action.currentChapterComicSeoAlias
		})
	),
	on(
		getChaptersComicFailureAction,
		(state): ReadingComicState => ({
			...state,
			isLoading: false,
		})
	),
	
);

export function reducers(state: ReadingComicState, action: Action) {
  return ReadingComicReducer(state, action);
}
