import { ChapterComic } from './chapter-comic.interface';

export interface Comic {
	id: number;
	nameComic: string;
	differentNameComic: string;
	viewCount: number;
	urlCoverImageComic: string;
	dateCreated: Date;
	isActive: boolean;
	idNewChapter: number;
	seoAlias: string;
	rating: number;
	readChapterId: number;
	chaptersComics: ChapterComic[];
}
