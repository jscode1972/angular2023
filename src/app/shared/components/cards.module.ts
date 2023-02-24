import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiColumnComponent } from './cards';

@NgModule({
  declarations: [
    MultiColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiColumnComponent
  ]
})
export class CardsModule { }
