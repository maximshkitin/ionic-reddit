import { App } from 'ionic-angular'
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  limit: any;
  category: any;
  constructor(public navCtrl: NavController, private app: App) {
    this.getDefaults();
  }

  getDefaults() {
    if(!localStorage.getItem('category'))
      this.category = "sports";
    else 
      this.category = localStorage.getItem('category')

    if (!localStorage.getItem('limit'))
      this.limit = 10;
    else 
      this.limit = localStorage.getItem('limit')
  }

  setDefaults() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.app.getRootNav().setRoot(TabsPage);
  }

}
