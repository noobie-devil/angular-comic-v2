import { Category } from 'src/app/core/models/category.interface';

export interface CategoriesState {
	data: Category[] | null;
	error: string | null;
	isLoading: boolean;
}