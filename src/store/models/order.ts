import {Book} from './book';

export interface Order {
  book: Book;
  number: number;
  customerName: string;
  customerAddress: string;
}
