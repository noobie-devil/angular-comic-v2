import { Comic } from 'src/app/core/models/comic.interface';

export interface ComicsState {
	data: Comic[] | null;
	error: string | null;
	isLoading: boolean;
}