import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent, RxjsComponent, W2uiComponent } from './pages';

import { ReactFormModule } from './react-form';
import { TdfPortalModule } from './tdf-form';
import { ModalDemoModule } from './modal-demo';

@NgModule({
  declarations: [
    DemoComponent,
    RxjsComponent,
    W2uiComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule, BrowserModule, FormsModule, ReactiveFormsModule,
    //
    ReactFormModule, TdfPortalModule, ModalDemoModule
  ]
})
export class DemoModule { }
