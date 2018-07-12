import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the PushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
})
export class PushPage {
  pushPage: any;
  infoPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infoPage = InfoPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushPage');
  }

  log() {
    console.log('click');
  }
}
