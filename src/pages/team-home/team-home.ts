import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { StandingsPage, TeamDetailPage } from '../pages';
		  // import { MyTeamsPage, TeamsPage } from '../pages'

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

	teams: any; 
	// adding class memebers for the pages we imported. 
	TeamDetailTab = TeamDetailPage;
	StandingsTab = StandingsPage; 
	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.teams = this.navParams.data;
  	console.log(' team-home this.teams = ',this.teams )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
