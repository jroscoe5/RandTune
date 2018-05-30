import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewsongComponent } from './newsong/newsong.component';
import { UserComponent } from './user/user.component';
import { SongService } from './newsong/song-service.service';
import { UserService } from './user/user-service.service';
import { ReviewsGivenComponent } from './user/reviews-given/reviews-given.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenubarComponent,
    NewsongComponent,
    UserComponent,
    ReviewsGivenComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	NgbModule.forRoot(),
	routing,
  ],
  providers: [SongService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
