import {Component, OnInit} from '@angular/core';
import {Book} from '../../../models/book';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../services/search.service';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {

  public book !: Book;
  public bookForm = new FormGroup({
    customerAddress: new FormControl(''),
    customerName: new FormControl(''),
    number: new FormControl(1),
  });

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private search: SearchService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      const isbn = params.isbn;
      return this.search.bookdetails(isbn);
    })).subscribe(book => {
      this.book = book;
    });
  }

  public submit(): void {
    const order: Order = {
      book: this.book,
      ...this.bookForm.value
    };
    console.log('submit form: ', order);
    this.orderService.order$(order).subscribe(value => {
      console.log('Ordered book! ', value);
    });
  }

  public cancel(): void {
    console.log('cancel form');
  }

}
