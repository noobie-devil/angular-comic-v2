import { Comic } from 'src/app/core/models/comic.interface';

export interface ComicsState {
	hotComics: Comic[] | null;
	newComics: Comic[] | null;
	error: string | null;
	isLoading: boolean;
}