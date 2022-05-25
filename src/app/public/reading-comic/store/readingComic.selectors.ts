import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { ReadingComicState } from 'src/app/public/reading-comic/store/types/readingComicState.interface';
import { AppState } from 'src/app/core/models/app-state.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';

export const ReadingComicFeatureSelector = createFeatureSelector<
	AppState, 
	ReadingComicState
>('readingComic');

export const detailsComicSelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.detailsComic,
);

export const chaptersComicSelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.chaptersComic,
);

export const chaptersComicDictionarySelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.chaptersComicDictionary,
);

export const urlChapterImagesComicSelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.urlChapterImagesComic,
);

// export const chapterComicsDictionarySelector = createSelector(
// 	chaptersComicSelector,
// 	chaptersComic => {
// 		let chaptersComicDictionary: { [seoAlias: string]: ChapterComic } = {};

// 		chaptersComic.forEach(chapterComic => {
// 			chaptersComicDictionary[chapterComic.seoAlias] = chapterComic;
// 		});

// 		return chaptersComicDictionary;
// 	}
// );

export const currentChapterComicSeoAliasSelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.currentChapterComicSeoAlias,
)

export const currentChapterComicSelector = createSelector(
	chaptersComicDictionarySelector,
	(chaptersComicDictionary, props) => {
		return chaptersComicDictionary[props.currentChapterComicSeoAlias];
	}
)

export const isLoadingSelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.isLoading
);

export const errorSelector = createSelector(
	ReadingComicFeatureSelector,
	(readingComicState: ReadingComicState) => readingComicState.error
);