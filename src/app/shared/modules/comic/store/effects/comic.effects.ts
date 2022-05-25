import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ComicService } from 'src/app/shared/modules/comic/services/comic.service';
import {
	getHotComicsAction,
	getHotComicsSuccessAction,
	getHotComicsFailureAction,
	getNewComicsAction,
	getNewComicsSuccessAction,
	getNewComicsFailureAction,
} from 'src/app/shared/modules/comic/store/actions/getComics.action';
import { Comic } from 'src/app/core/models/comic.interface';

@Injectable()
export class ComicEffects {

	constructor(private actions$: Actions, private comicService: ComicService) {}

	getNewComics$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getNewComicsAction),
			switchMap(() => {
				return this.comicService.getNewComics().pipe(
					map((comics: Comic[]) => {
						return getNewComicsSuccessAction({ comics });
					}),
					catchError(() => {
						return of(getNewComicsFailureAction());
					})
				);
			})
		)
	);


	getHotComics$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getHotComicsAction),
			switchMap(() => {
				return this.comicService.getHotComics().pipe(
					map((comics: Comic[]) => {
						return getHotComicsSuccessAction({ comics });
					}),
					catchError(() => {
						return of(getHotComicsFailureAction());
					})
				);
			})
		)
	);
}