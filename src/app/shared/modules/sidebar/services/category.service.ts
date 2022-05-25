import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Category } from 'src/app/core/models/category.interface';
import { GetCategoriesResponse } from 'src/app/core/models/get-categories-response.interface';

@Injectable()
export class CategoryService {
	constructor(private http: HttpClient) {}

	getCategories(): Observable<Category[]> {
		const url = environment.apiUrl + '/Categories';
		return this.http.get<Category[]>(url);
	}
}
