import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { ComponentsComponent } from './components/components.component';
import { StackblitzComponent } from './components/pages/stackblitz/stackblitz.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    ComponentsComponent, StackblitzComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AngularModule { }
