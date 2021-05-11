import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { ReuseTabComponent } from './basic-layout/reuse-tab/reuse-tab.component';
import { SidebarComponent } from './basic-layout/sidebar/sidebar.component';
import { HeaderComponent } from './basic-layout/header/header.component';


@NgModule({
  declarations: [
    BasicLayoutComponent,
    ReuseTabComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule { }
