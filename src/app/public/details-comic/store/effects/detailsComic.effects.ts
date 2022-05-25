import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DetailsComicService } from 'src/app/core/services/details-comic.service';
import { ChaptersComicService } from 'src/app/core/services/chapters-comic.service';
import {
	getDetailsComicAction,
	getDetailsComicSuccessAction,
	getDetailsComicFailureAction,
	getChaptersComicAction,
	getChaptersComicSuccessAction,
	getChaptersComicFailureAction,
	
} from 'src/app/public/details-comic/store/actions/detailsComic.action';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';

@Injectable()
export class DetailsComicEffects {

	constructor(
		private actions$: Actions, 
		private detailComicService: DetailsComicService,
		private chaptersComicService: ChaptersComicService
		) {}

	getDetailsComic$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getDetailsComicAction),
			switchMap(({ slug }) => {
				return this.detailComicService.getBySeoAlias(slug).pipe(
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
			switchMap(({ slug }) => {
				return this.chaptersComicService.getBySeoAlias(slug).pipe(
					map((chaptersComic: ChapterComic[] ) => {
						return getChaptersComicSuccessAction({ chaptersComic });
					}),
					catchError(() => {
						return of(getChaptersComicFailureAction());
					})
				);
			})
		)
	);

	
}