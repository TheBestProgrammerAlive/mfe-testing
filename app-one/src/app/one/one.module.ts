import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { OneRoutingModule } from './one-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TestinStuffModule } from 'testin-stuff';

@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    OneRoutingModule,
    ButtonModule,
    RippleModule,
    TestinStuffModule,
  ],

  exports: [OneComponent],
})
export class OneModule {}
