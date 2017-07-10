import { Component } from '@angular/core';
import { Events} from 'ionic-angular';

@Component({
  selector: 'counter',
  templateUrl: 'counter.html'
})
export class CounterComponent {

  count: number = 0;

  constructor(public events:Events) {
    this.events.subscribe("button:addToCart", () => {
      this.count ++;
    });  
  }

}
