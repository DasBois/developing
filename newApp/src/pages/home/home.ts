import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  imports: [
    IonicImageViewerModule
  ]
})
export class AppModule {}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
