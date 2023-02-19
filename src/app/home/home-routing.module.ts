import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, AboutComponent, ContactComponent, DemoComponent } from './pages';

const routes: Routes = [
  { path: '',   component: HomeComponent},
  { path: 'w2ui', component: DemoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
