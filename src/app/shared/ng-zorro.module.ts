import { NgModule } from '@angular/core';

/**
 * ng-zorro-modules
 */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule} from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  exports: [
    NzLayoutModule,
    NzButtonModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule,
    NzBadgeModule,
    NzAvatarModule,
    NzDescriptionsModule,
    NzCardModule,
    NzDividerModule,
    NzGridModule
  ]
})
export class NgZorroModule { }
