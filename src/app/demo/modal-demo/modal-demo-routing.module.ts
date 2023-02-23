import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalPortalComponent } from './pages';
import { BootstrapDemoComponent } from './bootstrap';

const routes: Routes = [
  { path: 'modal', component: 
  ModalPortalComponent, 
    children: [
      { path: 'bootstrap', component: BootstrapDemoComponent },
      { path: '', redirectTo: 'bootstrap', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalDemoRoutingModule { }
