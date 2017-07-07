import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product} from '../../app/product';
import { productService } from '../../app/product.service';
import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage implements OnInit {

  products: Product[];
  selectedCategory: any;
  constructor(private productService: productService, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedCategory = navParams.get('category');
  }
  getProducts(): void {
    this.productService
      .getProducts(this.selectedCategory)
      .then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  itemTapped(event, product) {
    this.navCtrl.push(DetailsPage, {
      product: product
    });
  }
}
