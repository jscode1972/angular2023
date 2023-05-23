import { NgModule } from '@angular/core';
import { RouterModule, Routes, 
  //HashLocationStrategy, LocationStrategy 
} from '@angular/router';

const routes: Routes = [
    /********  應該移到 root 中!! ************************
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'guide', component: GuideComponent }, // 不應該掛在portal 下, 應該放到root,  再想想
  { path: 'links', component: LinksComponent }  // 不應該掛在portal 下, 應該放到root,  再想想
  *****************************************************/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
