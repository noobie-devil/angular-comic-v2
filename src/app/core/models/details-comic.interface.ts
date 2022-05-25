import { Author } from './author.interface';
import { Category } from './category.interface';

export interface DetailsComic {
	id: number;
	nameComic: string;
	differentNameComic: string;
	viewCount: number;
	urlCoverImageComic: string;
	dateCreated: Date;
	idNewChapter: number;
	rating: number;
	description: string;
	seoDescription: string;
	seoTitle: string;
	seoAlias: string;
	status: string;
	authors: Author[];
	categories: Category[];

}