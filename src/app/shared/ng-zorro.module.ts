import { NgModule } from '@angular/core';

/**
 * ng-zorro-modules
 */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  exports: [
    NzButtonModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class NgZorroModule { }
