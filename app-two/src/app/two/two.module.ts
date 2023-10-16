import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two.component';
import { TwoRoutingModule } from './two-routing.module';
import { StoreModule } from '@ngrx/store';
import {counterFeature, counterReducer} from './store/reducers';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    TwoRoutingModule,
    StoreModule.forFeature(counterFeature),
  ],
  exports: [TwoComponent],
})
export class TwoModule {}
