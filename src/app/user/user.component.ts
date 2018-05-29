import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SongService } from '../song-service.service';
import ISongModelAngular from '../share/ISongModelAngular';
import { Song } from '../share/Song';
import IUserModelAngular from '../share/IUserModelAngular';
import { User } from '../share/User';

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
  
  constructor(
	private route: ActivatedRoute,
    private location: Location,
    private song$: SongService
  ) {
	  song$.getUser('mafiag@gmail.com')
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
        () => {}
	    );
  }

  ngOnInit() {}

}