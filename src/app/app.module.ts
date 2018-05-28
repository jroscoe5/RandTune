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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenubarComponent,
    NewsongComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	NgbModule.forRoot(),
	routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
