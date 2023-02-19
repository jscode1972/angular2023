import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component'; // reuterLink 必須

@NgModule({
  declarations: [
    CustomComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CustomComponent
  ]
})
export class CustomModule { }
