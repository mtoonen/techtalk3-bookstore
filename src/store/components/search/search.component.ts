import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Book} from '../../models/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  public openBook = new EventEmitter<Book>();
  public books: Book[] = [];
  @Input()
  public canEdit = false;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.search('').subscribe(value => this.books = value);
  }

  public search(term: any): void {
    this.searchService.search(term).subscribe(value => this.books = value);
  }

  public open(book: Book) {
    this.openBook.next(book);
  }
}
