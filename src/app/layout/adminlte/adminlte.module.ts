import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { AdminlteComponent, HeaderComponent, SidebarComponent, ContentComponent } from './pages';

@NgModule({
  declarations: [
    AdminlteComponent, HeaderComponent, SidebarComponent, ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    //FormsModule,  ReactiveFormsModule,  HttpClientModule,  
  ],
  exports: [
    AdminlteComponent
  ]
})
export class AdminlteModule { }
