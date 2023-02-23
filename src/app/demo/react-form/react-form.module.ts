import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactFormRoutingModule } from './react-form-routing.module';
import { ReactFormComponent, 
         FormGroupComponent, FormControlComponent, FormArrayComponent, FormBuilderComponent, 
         RequiredComponent, ArrayEmptyComponent, DecimalValidatorComponent, AsyncValidatorComponent,
         SetValidatorComponent, SetValueComponent, ValueChangesComponent, ArrayMethodComponent, 
         FormComponentComponent } from './pages';

@NgModule({
  declarations: [
    ReactFormComponent,
    FormGroupComponent,   FormControlComponent,  FormArrayComponent, FormBuilderComponent,
    RequiredComponent,  ArrayEmptyComponent, DecimalValidatorComponent, AsyncValidatorComponent,
    SetValidatorComponent, SetValueComponent, ValueChangesComponent, ArrayMethodComponent,
    FormComponentComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    ReactFormRoutingModule
  ]
})
export class ReactFormModule { }
