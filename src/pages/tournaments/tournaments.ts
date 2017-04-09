
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';

import { EliteApi } from '../../shared/shared';

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})

export class TournamentsPage {
  tournaments: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public eliteApi: EliteApi) {}

  itemTapped(){
  	this.navCtrl.push(TeamsPage);
  }

  gotoTeam() {
  	  	console.log( '23- gotoTeam func called');
  	this.navCtrl.push(TeamsPage);  	
  }


ionViewLoaded() {
    console.log('ionViewLoaded() TournamentsPage');
    this.eliteApi.getTournaments().then( data => this.tournaments = data);
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

}
