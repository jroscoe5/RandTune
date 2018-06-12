import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SongService {

  constructor(private http: Http) { }

  getRandomSong() {
    return this.http.get('http://localhost:8080/randomsong')
    .map(response => response.json());
  }
  
  getMusician(musicianId: string) {
	  return this.http.get('http://localhost:8080/users/' + musicianId)
	  .map(response => response.json());
  }

  submitReview(userId: string, songId: string, content: string, rating: string) {
	var i = '';
	return this.http.post('http://localhost:8080/upload/review/' + userId + '/' + songId + '/' + content + '/' + rating, i)
	.map(response => response.json());
  }
}