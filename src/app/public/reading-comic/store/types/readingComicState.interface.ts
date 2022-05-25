import { ChapterComic } from 'src/app/core/models/chapter-comic.interface';
import { DetailsComic } from 'src/app/core/models/details-comic.interface';

export interface ReadingComicState {
	detailsComic: DetailsComic | null;
	chaptersComic: ChapterComic[] | null;
	chaptersComicDictionary: { [key: string]: ChapterComic } | null;
	currentChapterComicSeoAlias: string | null;
	urlChapterImagesComic: string[] | null;
	error: string | null;
	isLoading: boolean;
}

