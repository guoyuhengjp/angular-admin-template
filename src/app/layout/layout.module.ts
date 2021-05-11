import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';


@NgModule({
  declarations: [
    BasicLayoutComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule { }
