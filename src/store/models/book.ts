import {Publisher} from './publisher';
import {Author} from './author';

export interface Book {
  id: number;
  isbn: string;
  title: string;
  thumbnail: string;
  num_pages?: number;
  publication_date?: Date;
  publisher: Publisher;
  authors: Author[];
}
