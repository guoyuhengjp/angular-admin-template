import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicLayoutComponent} from './layout/basic-layout/basic-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
