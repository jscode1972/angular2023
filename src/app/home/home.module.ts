import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, LinksComponent, TodoComponent, 
         ModalContainerComponent, ModalPopupComponent, ModalInputComponent } from './pages';

@NgModule({
  declarations: [
    HomeComponent,  TodoComponent, LinksComponent,
    ModalContainerComponent, ModalPopupComponent, ModalInputComponent 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
