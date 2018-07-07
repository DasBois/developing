import { Component } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

search(event){
  console.log(event);
}

}