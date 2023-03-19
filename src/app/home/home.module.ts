import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { LinksComponent, TodoComponent, 
         ModalContainerComponent, ModalInputComponent,
         PopupModalComponent, PopupDialogComponent
        } from './pages';

@NgModule({
  declarations: [
    TodoComponent, LinksComponent,
    ModalContainerComponent, ModalInputComponent, 
    PopupModalComponent, PopupDialogComponent, //PopupConfirmComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class HomeModule { }
