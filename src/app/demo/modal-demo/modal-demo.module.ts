import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDemoRoutingModule } from './modal-demo-routing.module';
import { ModalPortalComponent } from './pages/modal-portal.component';
import { BootstrapDemoComponent, BootstrapModalComponent } from './bootstrap';

@NgModule({
  declarations: [
    ModalPortalComponent,
    BootstrapDemoComponent, BootstrapModalComponent
  ],
  imports: [
    CommonModule,
    ModalDemoRoutingModule
  ]
})
export class ModalDemoModule { }
