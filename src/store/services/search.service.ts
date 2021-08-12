import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Book} from '../models/book';
import {books} from './testdata';
import {filter, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }

  public bookdetails(isbn: string): Observable<Book>{
    return from(books).pipe(
      filter (value => value.isbn === isbn),
      first()
    );
  }

  public search(term: string): Observable<Book[]> {
    console.log('searching: ', term);
    return of(books);
  }
}
