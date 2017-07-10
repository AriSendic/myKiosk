import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CounterComponent } from './counter';

@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterComponentModule {}
