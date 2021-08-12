import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../models/book';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommenderService {

  constructor(private http: HttpClient) {
  }

  public recommend2$(isbn: string): Observable<Book[]> {
    const url = environment.baseUrl + `/techtalk/examples/${isbn}`;
    const options = isbn ?
      {params: new HttpParams().set('id', isbn)} : {};
    return this.http.get<Book[]>(url);
  }

  public recommend$(isbn: string): Observable<Book[]> {
    return of([{
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
    }].filter(value => value.isbn !== isbn));
  }
}
