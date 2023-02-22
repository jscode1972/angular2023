import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { W2uiDialogComponent, NormalModalComponent } from './dialogs';
import { ShadowButtonComponent } from './buttons';
import { MultiColumnComponent } from './cards';
//import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    W2uiDialogComponent,
    ShadowButtonComponent,
    MultiColumnComponent,
    NormalModalComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
  ],
  exports: [
    W2uiDialogComponent,
    ShadowButtonComponent,
    MultiColumnComponent,
    NormalModalComponent
  ]
})
export class SharedModule { }
