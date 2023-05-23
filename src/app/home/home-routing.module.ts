import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, CssComponent, TodoComponent,
  ModalContainerComponent  } from './pages';
  import { AuthorizeGuard } from '../core/helpers';

const routes: Routes = [
  { path: '',   component: HomeComponent,    canActivate: [AuthorizeGuard]},
  { path: 'css', component: CssComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'modal', component: ModalContainerComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
