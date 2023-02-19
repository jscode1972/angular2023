import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent, StackblitzComponent, TempComponent } from './components';
import { ServicesComponent } from './services';
import { PipesComponent } from './pipes';

const routes: Routes = [
  { path: 'service', component: ServicesComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'component',   
    component: ComponentsComponent ,
    children: [
      { path: 'stackblitz', component: StackblitzComponent }, 
      { path: 'temp', component: TempComponent }, 
      //{ path: '', redirectTo: 'stackblitz', pathMatch: 'full' },  
    ]
  },
  //{ path: '', redirectTo: 'topics', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
