import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent, RxjsComponent, W2uiComponent  } from './pages';

const routes: Routes = [
  { path: 'demo', 
    component: DemoComponent,
    children: [
      { path: 'rxjs', component: RxjsComponent },
      { path: 'w2ui', component: W2uiComponent },
      { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
