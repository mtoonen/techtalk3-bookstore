import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  @Input()
  public book!: Book;

  constructor(
    private route: ActivatedRoute,
    private search: SearchService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      const isbn = params.isbn;
      return this.search.bookdetails(isbn);
    })).subscribe(book => {
      this.book = book;
    });
  }

}
