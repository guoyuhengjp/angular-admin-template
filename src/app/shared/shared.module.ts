import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgZorroModule } from './ng-zorro.module';

const COMPONENTS = [];

const MODULES = [
  NgZorroModule
];

const IMPORT_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  ...MODULES
];

const EXPORT_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ...MODULES,
  ...COMPONENTS
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: IMPORT_MODULES,
  exports: EXPORT_MODULES
})
export class SharedModule { }
