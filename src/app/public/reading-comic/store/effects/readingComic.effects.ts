import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { EMPTY, of, empty } from 'rxjs';
import { catchError, map, switchMap, concatMap, exhaustMap, filter, withLatestFrom } from 'rxjs/operators';
import { ChaptersComicService } from 'src/app/core/services/chapters-comic.service';
import { DetailsComicService } from 'src/app/core/services/details-comic.service';
import { UrlChapterImagesComicService } from 'src/app/core/services/url-chapter-images-comic.service';

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

import {
	isLoadingSelector
} from 'src/app/public/reading-comic/store/readingComic.selectors';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';

@Injectable()
export class ReadingComicEffects {

	constructor(
		private actions$: Actions, 
		private chaptersComicService: ChaptersComicService,
		private store: Store,
		private detailComicService: DetailsComicService,
		private urlChapterImagesComicService: UrlChapterImagesComicService
		) {}

	getUrlChapterImagesComic$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getUrlChapterImagesComicAction),
			switchMap(({ currentChapterComicSeoAlias }) => {
				return this.urlChapterImagesComicService.getByChapterComicSeoAlias(currentChapterComicSeoAlias).pipe(
					map((urlChapterImagesComic: string[]) => {
						return getUrlChapterImagesComicSuccessAction({ urlChapterImagesComic });
					}),
					catchError(() => {
						return of(getUrlChapterImagesComicFailureAction());
					})
				);
			})
		)
	);

	getDetailsComic$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getDetailsComicAction),
			switchMap(({ comicSlug }) => {
				return this.detailComicService.getBySeoAlias(comicSlug).pipe(
					map((detailsComic: DetailsComic) => {
						return getDetailsComicSuccessAction({ detailsComic });
					}),
					catchError(() => {
						return of(getDetailsComicFailureAction());
					})
				);
			})
		)
	);

	getChaptersComic$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getChaptersComicAction),
			switchMap(({ currentChapterComicSeoAlias, comicSlug }) => {
				return this.chaptersComicService.getBySeoAlias(comicSlug).pipe(
					map((chaptersComic: ChapterComic[]) => {
						let chaptersComicDictionary: { [seoAlias: string]: ChapterComic } = {};
						chaptersComic.forEach(chapterComic => {
							chaptersComicDictionary[chapterComic.seoAlias] = chapterComic;
						});
						return getChaptersComicSuccessAction({ chaptersComicDictionary, currentChapterComicSeoAlias });
					}),
					catchError(() => {
						return of(getChaptersComicFailureAction());
					})
					);
			})
			)
		);
	// getChaptersComicDictionary$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(getChaptersComicAction),
	// 		concatMap(action => of(action).pipe(withLatestFrom(this.store.select(isLoadingSelector)))),
	// 		filter(([_, isLoading]) => !isLoading),
	// 		switchMap(({ slug }) => {
	// 			if(loaded) {
	// 				return empty();
	// 			}
	// 			return this.chaptersComicService.getBySeoAlias(slug).pipe(
	// 				map((chaptersComic: ChapterComic[] ) => {
	// 					return getChaptersComicAction({ chaptersComic });
	// 				}),
	// 				catchError(() => {
	// 					return of(getChaptersComicFailureAction());
	// 				})
	// 			);
	// 		})
	// 	)
	// );

	// getChaptersComicDictionary$ = createEffect(() => {
	// 	return this.actions$.pipe(
	// 		ofType(getChaptersComicAction),
	// 		withLastestFrom(this.store.pipe(select(isLoadingSelector))),
	// 		filter(([_, loaded]) => !loaded),
	// 		exhaustMap(() => 
	// 			this.chaptersComicService.getBySeoAlias(slug).pipe(
	// 				map(chaptersComic => getChaptersComicSuccessAction({ chaptersComic })),
	// 				catchError(() => {
	// 					return of(getChaptersComicFailureAction());
	// 				});
	// 			)
	// 		)
	// 	);
	// })
	// getChaptersComicDictionary$ = createEffect(() => {
	// 	return this.actions$.pipe(
	// 		ofType(getChaptersComicAction),
	// 		withLatestFrom(this.store.pipe(select(isLoadingSelector))),
	// 		filter(([slug, loaded]) => !loaded),
	// 		exhaustMap(() => 
	// 			this.chaptersComicService.getBySeoAlias(slug).pipe(
	// 				map(chaptersComic => getChaptersComicSuccessAction({ chaptersComic })),
	// 				catchError(() => of(getChaptersComicFailureAction()))
	// 			)
	// 		)
	// 	);
	// });

}