import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../song-service.service';

@Component({
  selector: 'app-newsong',
  templateUrl: './newsong.component.html',
  styleUrls: ['./newsong.component.css']
})

export class NewsongComponent implements OnInit {
	public song;
	constructor(private _songServiceService: SongServiceService) { }

	ngOnInit() {
		this.getSong();
	}
	
	getSong() {
		this._songServiceService.getSong().subscribe(
			data => { this.song = data},
			err => console.error(err),
			() => console.log('done loading song')
		);
	}
}
