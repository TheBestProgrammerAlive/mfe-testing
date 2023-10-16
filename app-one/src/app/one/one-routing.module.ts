import { NgModule } from '@angular/core';
import { OneComponent } from './one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: OneComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneRoutingModule {}
