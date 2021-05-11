import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicLayoutComponent} from './layout/basic-layout/basic-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
