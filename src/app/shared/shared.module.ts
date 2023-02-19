import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { W2uiDialogComponent } from './dialogs/w2ui-dialog/w2ui-dialog.component';
//import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    W2uiDialogComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
  ],
  exports: [
    W2uiDialogComponent
  ]
})
export class SharedModule { }
