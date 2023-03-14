import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, LinksComponent, TodoComponent, 
         ModalContainerComponent, ModalInputComponent,
         PopupModalComponent, PopupConfirmComponent
        } from './pages';

@NgModule({
  declarations: [
    HomeComponent,  TodoComponent, LinksComponent,
    ModalContainerComponent, ModalInputComponent, 
    PopupModalComponent, PopupConfirmComponent 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule 
  ]
})
export class HomeModule { }
