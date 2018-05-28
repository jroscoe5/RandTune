import {Component} from '@angular/core';
import {SongServiceService} from './song-service.service';
import {Observable} from 'rxjs/Rx';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //constructor(private _songServiceService: SongServiceService) { }
  constructor() {}
}