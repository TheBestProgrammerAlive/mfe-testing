import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "one",
    loadChildren: () => import('one/One').then(m => m.OneModule)
  },
  {
    path: "two",
    loadChildren: () => import('two/Two').then(m => m.TwoModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
