import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three.component';
import {ThreeRoutingModule} from "./three-routing.module";

@NgModule({
  declarations: [ThreeComponent],
  imports: [CommonModule, ThreeRoutingModule],
  exports: [ThreeComponent],
})
export class ThreeModule {}
