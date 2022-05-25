import { CategoriesState } from 'src/app/shared/modules/sidebar/types/categoriesState.interface';
import { ComicsState } from 'src/app/shared/modules/comic/types/comicsState.interface';
import { DetailsComicState } from 'src/app/public/details-comic/types/detailsComicState.interface';
import { ReadingComicState } from 'src/app/public/reading-comic/store/types/readingComicState.interface';

export interface AppState {
	categories: CategoriesState;
	comics: ComicsState;
	detailsComic: DetailsComicState;
	readingComic: ReadingComicState;
}
