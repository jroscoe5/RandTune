import { Input, Component, OnInit } from '@angular/core';
import IReviewModelAngular from '../../share/IReviewModelAngular';

@Component({
  selector: 'app-reviews-given',
  templateUrl: './reviews-given.component.html',
  styleUrls: ['./reviews-given.component.css']
})
export class ReviewsGivenComponent implements OnInit {
@Input() review: IReviewModelAngular;
@Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
