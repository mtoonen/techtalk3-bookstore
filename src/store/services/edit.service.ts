import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }


  public save$(book: Book): Observable<Book>{
    const url = environment.baseUrl + `/edit`;
    return this.http.post<Book>(url, book);
  }
}
