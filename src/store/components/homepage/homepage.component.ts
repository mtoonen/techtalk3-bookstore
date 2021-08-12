import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public currentBook!: Book;
  public page = 'zoek';

  constructor() {
  }

  ngOnInit(): void {
  }

  public bookOpened(book: Book): void {
    this.currentBook = book;
    this.page = 'bookdetails';
  }

}
