import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LinksComponent, TodoComponent } from './pages';

const routes: Routes = [
  { path: '',   component: HomeComponent},
  { path: 'links', component: LinksComponent },
  { path: 'todo', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
