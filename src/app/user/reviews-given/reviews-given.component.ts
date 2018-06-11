import { Input, Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import IReviewModelAngular from '../../share/IReviewModelAngular';
import { UserService } from '../user-service.service';
import { Review } from '../../share/Review';

@Component({
  selector: 'reviews-given',
  templateUrl: './reviews-given.component.html',
  styleUrls: ['./reviews-given.component.css']
})
export class ReviewsGivenComponent implements OnInit {
@Input() review: IReviewModelAngular;
@Input() index: number;
username: string;
title: string;

constructor(
	private route: ActivatedRoute,
    private location: Location,
    private user$: UserService
  ) {}

  ngOnInit() {
	this.user$.getUserById(this.review.user_id)
	.subscribe(
		result => {
			this.username = result.username;
			console.log(result.username);
		},
		() => {},
		() => {
			this.user$.getSongById(this.review.song_id)
			.subscribe(
				result => {
					this.title = result[0].title;
				},
				() => {},
				() => {}
			);
		}
	);
  }
}