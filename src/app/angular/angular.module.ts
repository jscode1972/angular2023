import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { ComponentsComponent, StackblitzComponent, TempComponent } from './components';
import { ServicesComponent } from './services';
import { SharedModule } from 'src/app/shared';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './components/pages/forms/forms.component';

@NgModule({
  declarations: [
    ComponentsComponent, StackblitzComponent, TempComponent,
    ServicesComponent,
    PipesComponent,
    FormsComponent
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
