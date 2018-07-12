import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PushPage } from '../push/push';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = PushPage;
  }

}
