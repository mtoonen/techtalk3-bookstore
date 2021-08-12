import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../services/search.service';
import {Book} from '../../../models/book';
import {EditService} from '../../../services/edit.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  public book !: Book;
  public bookForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private edit: EditService,
    private search: SearchService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      const isbn = params.isbn;
      return this.search.bookdetails(isbn);
    })).subscribe(book => {
      this.book = book;
      this.bookForm = new FormGroup({
        title: new FormControl(this.book.title),
        isbn: new FormControl(this.book.isbn),
        author: new FormControl(this.book.authors[0].author_name),
        publisher: new FormControl(this.book.publisher.publisher_name),
      });
    });
  }

  public submit(): void {
    this.book = {
      ...this.bookForm.value
    };
    this.edit.save$(this.book).subscribe(value => {
      console.log('Saved', value);
    });
  }

}
