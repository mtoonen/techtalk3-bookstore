import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }

  public search(term: string): Observable<Book[]> {
    console.log('searching: ', term);
    return of([
      {
        id: 1,
        title: 'The Stand',
        thumbnail: 'https://cataas.com/cat?width=100',
        isbn: '9780385121682'
      }, {
        id: 2,
        title: 'The Dark Tower I',
        thumbnail: 'https://cataas.com/cat?width=100',
        isbn: '9780937986509'
      }, {
        id: 3,
        title: 'The Dark Tower II',
        thumbnail: 'https://cataas.com/cat?width=100',
        isbn: '9780937986905'
      }, {
        id: 4,
        title: 'The Dark Tower III',
        thumbnail: 'https://cataas.com/cat?width=100',
        isbn: '9780937986172'
      }, {
        id: 5,
        title: 'The Dark Tower IV',
        thumbnail: 'https://cataas.com/cat?width=100',
        isbn: '9781880418383'
      }, {
        id: 6,
        title: 'De meeste mensen deugen',
        thumbnail: 'https://cataas.com/cat?width=100',
        isbn: '9789082942187'
      }
    ]);
  }
}
