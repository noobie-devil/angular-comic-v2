import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Comic } from 'src/app/core/models/comic.interface';

@Injectable()
export class ComicService {

  	private baseUrl = environment.apiUrl + '/ComicStrips';

	constructor(private http: HttpClient) {}

	getNewComics(): Observable<Comic[]> {
		const url = `${this.baseUrl}/NewComicPaging?PageIndex=1&PageSize=12`;
		return this.getComics(url);
	}

	getHotComics(): Observable<Comic[]> {
		const url = `${this.baseUrl}/HotComicPaging`;
		return this.getComics(url);
	}

	getComics(url: string) {
		return this.http.get<Comic[]>(url);
	}
}
