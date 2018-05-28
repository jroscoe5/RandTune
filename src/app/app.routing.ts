import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewsongComponent } from './newsong/newsong.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'newsong', component: NewsongComponent },
	{ path: 'user', component: UserComponent }
];

export const routing = RouterModule.forRoot(routes);