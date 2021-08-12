import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/order';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  public order$(order: Order): Observable<any> {
    const url = environment.baseUrl + `/order`;
    return this.http.post(url, order);
  }

}
