import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from './user-service.service';
import ISongModelAngular from '../share/ISongModelAngular';
import { Song } from '../share/Song';
import IUserModelAngular from '../share/IUserModelAngular';
import { User } from '../share/User';
import IReviewModelAngular from '../share/IReviewModelAngular';
import { Review } from '../share/Review';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  userFName: string;
  userLName: string;
  username: string;
  userBio: string;
  userFB: string;
  userTwitter: string;
  userBalance: number;
  @Input() reviewNumber: number[] = [1,2,3,4,5];
  reviews: IReviewModelAngular[];
  
  constructor(
	private route: ActivatedRoute,
    private location: Location,
    private user$: UserService
  ) {
	  user$.getUser('mafiag@gmail.com')
	  .subscribe(
		  result => {
			this.userFName = result.first_name;
			this.userLName = result.last_name;
			this.username = result.username;
			this.userBio = result.bio;
			this.userFB = result.facebook;
			this.userTwitter = result.twitter;
			this.userBalance = result.balance;
		  },
		() => {},
        () => {
			user$.getReviews('5b0cc9a09564e6ea0f8923b5')
			.subscribe(
			  result => this.reviews = result,
			  () => {},
			  () => console.log('REST call:' + this.reviews)
			);
		}
	   );
  }

  ngOnInit() {}

}