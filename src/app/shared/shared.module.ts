import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { W2uiDialogComponent } from './dialogs';
import { ShadowButtonComponent } from './buttons';
import { MultiColumnComponent } from './cards/multi-column/multi-column.component';
//import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    W2uiDialogComponent,
    ShadowButtonComponent,
    MultiColumnComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
  ],
  exports: [
    W2uiDialogComponent,
    ShadowButtonComponent,
    MultiColumnComponent
  ]
})
export class SharedModule { }
