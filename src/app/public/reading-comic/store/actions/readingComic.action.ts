import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/public/reading-comic/store/actionTypes';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';


export const getUrlChapterImagesComicAction = createAction(
	ActionTypes.GET_URL_CHAPTER_IMAGES_COMIC,
	props<{ currentChapterComicSeoAlias }>()
)

export const getUrlChapterImagesComicSuccessAction = createAction(
	ActionTypes.GET_URL_CHAPTER_IMAGES_COMIC_SUCCESS,
	props<{ urlChapterImagesComic: string[] }>()
)

export const getUrlChapterImagesComicFailureAction = createAction(
	ActionTypes.GET_URL_CHAPTER_IMAGES_COMIC_FAILURE
)

export const getChaptersComicAction = createAction(
	ActionTypes.GET_CHAPTERS_COMIC,
	props<{ currentChapterComicSeoAlias: string, comicSlug: string }>()
);

export const getChaptersComicSuccessAction = createAction(
	ActionTypes.GET_CHAPTERS_COMIC_SUCCESS,
	props<{ chaptersComicDictionary: { [seoAlias: string]: ChapterComic }, currentChapterComicSeoAlias: string }>()
);

export const getChaptersComicFailureAction = createAction(
	ActionTypes.GET_CHAPTERS_COMIC_FAILURE
);


export const getDetailsComicAction = createAction(
	ActionTypes.GET_DETAILS_COMIC,
	props<{ comicSlug: string }>()
);

export const getDetailsComicSuccessAction = createAction(
	ActionTypes.GET_DETAILS_COMIC_SUCCESS,
	props<{ detailsComic: DetailsComic }>()
);

export const getDetailsComicFailureAction = createAction(
	ActionTypes.GET_DETAILS_COMIC_FAILURE
);