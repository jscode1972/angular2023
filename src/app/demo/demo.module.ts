import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoRoutingModule } from './demo-routing.module';
//
import { SharedModule } from 'src/app/shared';
import { DemoComponent, RxjsComponent, W2uiComponent, ModalTestComponent } from './pages';
import { ReactFormModule } from './react-form';
import { TdfPortalModule } from './tdf-form';

@NgModule({
  declarations: [
    DemoComponent,
    RxjsComponent,
    W2uiComponent,
    ModalTestComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    RouterModule, BrowserModule, FormsModule, ReactiveFormsModule,
    //
    ReactFormModule, TdfPortalModule
  ]
})
export class DemoModule { }
