import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OneModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
