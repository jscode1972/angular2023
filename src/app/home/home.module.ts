import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { CssComponent, TodoComponent, 
         ModalContainerComponent, ModalInputComponent,
         PopupModalComponent, PopupDialogComponent
        } from './pages';

@NgModule({
  declarations: [
    TodoComponent, CssComponent,
    ModalContainerComponent, ModalInputComponent, 
    PopupModalComponent, PopupDialogComponent, CssComponent, //PopupConfirmComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class HomeModule { }
