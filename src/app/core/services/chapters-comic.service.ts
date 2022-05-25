import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';

@Injectable()
export class ChaptersComicService {

  	private baseUrl = environment.apiUrl + '/ChapterComics';

	constructor(private http: HttpClient) {}

	getById(id: number): Observable<ChapterComic[]> {
		const url = `${this.baseUrl}/getbyid/${id}`;
		return this.getChaptersComic(url);
	}

	getBySeoAlias(seoAlias: string): Observable<ChapterComic[]> {
		const url = `${this.baseUrl}/getbyseoalias/%2F${seoAlias}`;
		return this.getChaptersComic(url);
	}

	getChaptersComic(url: string) {
		return this.http.get<ChapterComic[]>(url);
	}

}
