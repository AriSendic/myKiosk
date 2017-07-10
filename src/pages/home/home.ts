import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Product} from '../../app/product';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
   
  itemTapped(event, category) {
    this.navCtrl.push(ListPage, {
      category: category
    });
  } 
}
