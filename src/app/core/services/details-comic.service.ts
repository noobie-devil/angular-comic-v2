import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { DetailsComic } from 'src/app/core/models/details-comic.interface';

@Injectable()
export class DetailsComicService {

  	private baseUrl = environment.apiUrl + '/DetailComics';

	constructor(private http: HttpClient) {}

	getById(id: number): Observable<DetailsComic> {
		const url = `${this.baseUrl}/getbyid/${id}`;
		return this.getDetailsComic(url);
	}

	getBySeoAlias(seoAlias: string) {
		const url = `${this.baseUrl}/getbyseoalias/%2F${seoAlias}`;
		return this.getDetailsComic(url);
	}

	getDetailsComic(url: string) {
		return this.http.get<DetailsComic>(url);
	}

}
