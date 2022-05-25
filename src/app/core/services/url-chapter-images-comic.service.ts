import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class UrlChapterImagesComicService {

  	private baseUrl = environment.apiUrl + '/UrlChapterImageComics';

	constructor(private http: HttpClient) {}

	getByChapterComicId(id: number): Observable<string[]> {
		const url = `${this.baseUrl}/GetByChapterComicId/${id}`;
		return this.getUrlChapterImagesComic(url);
	}

	getByChapterComicSeoAlias(seoAlias: string) {
		seoAlias = seoAlias.split('/').join('%2F');
		const url = `${this.baseUrl}/GetByChapterComicSeoAlias/${seoAlias}`;
		return this.getUrlChapterImagesComic(url);
	}

	getUrlChapterImagesComic(url: string) {
		return this.http.get<string[]>(url);
	}

}
