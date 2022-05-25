import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ComicService } from 'src/app/core/services/comic.service';
import {
	getComicsAction,
	getComicsSuccessAction,
	getComicsFailureAction,
} from 'src/app/shared/modules/swiper/store/actions/getComics.action';
import { Comic } from 'src/app/core/models/comic.interface';

@Injectable()
export class ComicEffects {

	constructor(private actions$: Actions, private comicService: ComicService) {}

	getNewComics$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getComicsAction),
			switchMap(() => {
				return this.comicService.getNewComics().pipe(
					map((comics: Comic[]) => {
						return getComicsSuccessAction({ comics });
					}),
					catchError(() => {
						return of(getComicsFailureAction());
					})
				);
			})
		)
	);


	getHotComics$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getComicsAction),
			switchMap(() => {
				return this.comicService.getHotComics().pipe(
					map((comics: Comic[]) => {
						return getComicsSuccessAction({ comics });
					}),
					catchError(() => {
						return of(getComicsFailureAction());
					})
				);
			})
		)
	);
}