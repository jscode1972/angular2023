import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TdfPortalRoutingModule } from './tdf-portal-routing.module';
import { TdfPortalComponent, TdfModelComponent, TdfVariableComponent, TdfFormComponent,
  TdfModelGroupComponent, FormTouchedComponent, FormDirtyComponent, 
  TdfRequiredComponent
 } from './pages';

 import { DecimalValidatorDirective } from './pages/cust-validator/decimal-validator.directive';

@NgModule({
  declarations: [
    TdfPortalComponent,
    //
    TdfModelComponent,
    TdfVariableComponent,
    TdfFormComponent,
    TdfModelGroupComponent,
    FormTouchedComponent,
    FormDirtyComponent,
    TdfRequiredComponent,
    FormTouchedComponent,
    FormDirtyComponent,
    // 指令
    DecimalValidatorDirective
  ],
  imports: [
    CommonModule, FormsModule,
    TdfPortalRoutingModule
  ]
})
export class TdfPortalModule { }
