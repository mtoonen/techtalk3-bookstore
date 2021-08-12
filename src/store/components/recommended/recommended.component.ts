import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {RecommenderService} from '../../services/recommender.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  @Input()
  public book!: Book;
  public recommendedBooks: Book[] = [];

  constructor(private recommender: RecommenderService) {
  }

  public ngOnInit(): void {
    this.recommender.recommend$(this.book.isbn).subscribe(books => this.recommendedBooks = books);
  }

}
