import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Product} from '../../app/product';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  count:number;
  selectedItem: any;
  constructor(public events:Events, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('product');
  }
  addToCart() {
    this.events.publish("button:addToCart", this.count);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
