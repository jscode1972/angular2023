import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { AdminlteComponent, HeaderComponent, SidebarComponent, ContentComponent } from './pages';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    AdminlteComponent, HeaderComponent, SidebarComponent, ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    //FormsModule,  ReactiveFormsModule,  HttpClientModule,  
    SharedModule,
  ],
  exports: [
    AdminlteComponent
  ]
})
export class AdminlteModule { }
