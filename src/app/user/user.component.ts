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
import { Plyr } from 'plyr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  title: string;
  album: string;
  musician: string;
  musicianName: string;
  musicianBio: string;
  musicianFB: string;
  musicianTwitter: string;
  mp3Id: string;
  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private song$: SongService
  ) { 
    song$.getRandomSong()
    .subscribe(
      result => {
        this.title = result.title;
		this.album = result.album;
		this.musician = result.musician;
		this.mp3Id = 'http://localhost:8080/songs/raw/' + result.mp3_id;
		let audioPlayer: HTMLMediaElement = document.getElementById('player')
		audioPlayer.load();
      },
      () => {},
      () => {
		song$.getMusician(this.musician)
	    .subscribe(
		  result => {
			this.musicianName = result.username;
			this.musicianBio = result.bio;
			this.musicianFB = result.facebook;
			this.musicianTwitter = result.twitter;
		  },
		() => {},
        () => {}
	    );}
    );
  }

  ngOnInit() {}

}