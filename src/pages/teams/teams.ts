import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TournamentsPage } from '../pages'

import { TeamDetailPage } from '../pages'
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  teams = [
  	{ id:1, name: 'HC Elite'},
  	{ id:2, name: 'Team Takeover'},
  	{ id:3, name: 'DC Thunder'} 
  ];


  itemTapped($event, teams){
  	// console.log('item Tapped in side the teams.ts page');
  	this.navCtrl.push(TeamDetailPage, teams);
  }


  gotoTournaments(){
  	console.log( '23- gotoTournaments func called');
  	this.navCtrl.push(TournamentsPage);  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

}
