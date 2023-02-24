import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticModalComponent, W2uiDialogComponent, NormalModalComponent } from './modals';

@NgModule({
  declarations: [
    StaticModalComponent, W2uiDialogComponent, NormalModalComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaticModalComponent, W2uiDialogComponent, NormalModalComponent 
  ]
})
export class ModalsModule { }
