import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'grid-product',
  template: `
    <ion-grid>
      <ion-row text-center>
        <ion-col offset-1>
          <img class="shrink" (click)="itemTapped($event, product)" src={{product.image}}>
        </ion-col>
      </ion-row>
      <ion-row text-center>
        <ion-col offset-1>    
          <button ion-button (click)="itemTapped($event, product)">{{ product.name }}</button>
        </ion-col>
      </ion-row>       
    </ion-grid>
  `
})
export class GridProductComponent {
  
  @Input() product: Product;
  @Output()
    detailRequest = new EventEmitter<Product>();
    itemTapped() {
      this.detailRequest.emit(this.product);
    }
}

