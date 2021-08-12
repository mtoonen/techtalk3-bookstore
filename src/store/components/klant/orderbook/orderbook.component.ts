import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {

  public book !: Book;
  constructor(
    private route: ActivatedRoute,
    private search: SearchService,) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      const isbn = params.isbn;
      return this.search.bookdetails(isbn);
    })).subscribe(book => {
      this.book = book;
    });
  }

}
