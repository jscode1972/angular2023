import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule, ModalsModule, CardsModule } from './components';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, // RouterModule
    ButtonsModule, CardsModule, ModalsModule, 
  ],
  exports: [
    // re-exports
    ButtonsModule, CardsModule, ModalsModule,
  ]
})
export class SharedModule { }
