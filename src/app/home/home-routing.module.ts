import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LinksComponent, TodoComponent,
  ModalContainerComponent  } from './pages';
  import { AuthorizeGuard } from '../core/helpers';

const routes: Routes = [
  { path: '',   component: HomeComponent,    canActivate: [AuthorizeGuard]},
  { path: 'links', component: LinksComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'modal', component: ModalContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
