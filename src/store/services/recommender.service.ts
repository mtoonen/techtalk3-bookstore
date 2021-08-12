import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../models/book';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {books} from './testdata';

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
    return of(books.filter(value => value.isbn !== isbn));
  }
}
