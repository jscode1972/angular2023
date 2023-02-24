import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowButtonComponent } from './buttons';

@NgModule({
  declarations: [
    ShadowButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShadowButtonComponent
  ]
})
export class ButtonsModule { }
