import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
    data: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.data = params.get('data');
  }

}
