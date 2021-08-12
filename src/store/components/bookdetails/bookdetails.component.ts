import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  @Input()
  public book!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
