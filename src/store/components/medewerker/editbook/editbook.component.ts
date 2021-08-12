import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../services/search.service';
import {Book} from '../../../models/book';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  public book !: Book;
  constructor(
    private route: ActivatedRoute,
    private search: SearchService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      const isbn = params.isbn;
      return this.search.bookdetails(isbn);
    })).subscribe(book => {
      this.book = book;
    });
  }

}
