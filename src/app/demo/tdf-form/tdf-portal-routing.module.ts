import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfPortalComponent, TdfModelComponent, TdfVariableComponent, TdfFormComponent,
  TdfModelGroupComponent , FormTouchedComponent, FormDirtyComponent, 
  TdfRequiredComponent
} from './pages';

const routes: Routes = [
  { path: 'tdf',
    component: TdfPortalComponent, 
    children: [
      { path: 'tdf-model', component: TdfModelComponent },
      { path: 'tdf-variable', component: TdfVariableComponent },
      { path: 'tdf-form', component: TdfFormComponent },
      { path: 'tdf-model-group', component: TdfModelGroupComponent },
      { path: 'form-touched', component: FormTouchedComponent },
      { path: 'form-dirty', component: FormDirtyComponent },
      { path: 'tdf-required', component: TdfRequiredComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdfPortalRoutingModule { }
