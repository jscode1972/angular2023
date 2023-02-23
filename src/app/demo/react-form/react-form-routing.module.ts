import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactFormComponent, 
  FormControlComponent, FormGroupComponent, FormArrayComponent, FormBuilderComponent, 
  RequiredComponent, ArrayEmptyComponent, DecimalValidatorComponent, AsyncValidatorComponent,
  SetValidatorComponent, SetValueComponent, ValueChangesComponent, ArrayMethodComponent, 
  FormComponentComponent } from './pages';

const routes: Routes = [
  { path: 'react', component: 
    ReactFormComponent, 
    children: [
      { path: 'form-control', component: FormControlComponent },
      { path: 'form-group', component: FormGroupComponent },
      { path: 'form-array', component: FormArrayComponent },
      { path: 'form-builder', component: FormBuilderComponent },
      { path: 'required', component: RequiredComponent },
      { path: 'array-empty', component: ArrayEmptyComponent },
      { path: 'decimal-validator', component: DecimalValidatorComponent },
      { path: 'async-validator', component: AsyncValidatorComponent },
      { path: 'set-validator', component: SetValidatorComponent },
      { path: 'set-value', component: SetValueComponent },
      { path: 'value-changes', component: ValueChangesComponent },
      { path: 'array-method', component: ArrayMethodComponent },
      { path: 'form-component', component: FormComponentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactFormRoutingModule { }
