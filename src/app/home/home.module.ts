import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, ContactComponent, AboutComponent, DemoComponent } from './pages';

@NgModule({
  declarations: [
    HomeComponent, AboutComponent, ContactComponent, DemoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
