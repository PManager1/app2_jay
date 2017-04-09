import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { TeamsPage } from '../pages/teams/teams';

import { TournamentsPage } from '../pages/tournaments/tournaments';

import { TeamDetailPage, TeamHomePage, StandingsPage, MyTeamsPage } from '../pages/pages';



import { EliteApi } from '../shared/shared';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    TeamsPage,
    TournamentsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage,
    MyTeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    TeamsPage,
    TournamentsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage,
    MyTeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
