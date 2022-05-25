import { DetailsComic } from 'src/app/core/models/details-comic.interface';
import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';

export interface DetailsComicState {
	data: DetailsComic | null;
	chaptersComic: ChapterComic[] | null;
	error: string | null;
	isLoading: boolean;
}