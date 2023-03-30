import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticModalComponent, W2uiDialogComponent } from '.';

@NgModule({
  declarations: [
    StaticModalComponent, 
    W2uiDialogComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaticModalComponent, 
    W2uiDialogComponent 
  ]
})
export class ModalsModule { }
