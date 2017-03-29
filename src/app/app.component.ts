import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/pages';
import { Page2 } from '../pages/pages';

// import { TeamsPage } from '../pages/teams/teams';
import { TeamsPage } from '../pages/pages';
import { TournamentsPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    // this.pages = [
    //   { title: 'Page One/1', component: Page1 },
    //   { title: 'Page Two', component: Page2 }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome(){
    this.nav.push(TeamsPage);
  }

gotoTournaments(){
  this.nav.push(TournamentsPage);
}


}




















