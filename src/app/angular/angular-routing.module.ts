import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { StackblitzComponent } from './components/pages/stackblitz/stackblitz.component';

const routes: Routes = [
  { path: 'component',   
    component: ComponentsComponent ,
    children: [
      { path: 'stackblitz', component: StackblitzComponent }, 
      { path: '', redirectTo: 'compo', pathMatch: 'full' },  
    ]
  },
  { path: '', redirectTo: 'topics', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
