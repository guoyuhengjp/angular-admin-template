import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { FormRoutingModule } from './form-routing.module';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
