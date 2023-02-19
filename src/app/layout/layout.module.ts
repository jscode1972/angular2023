import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // reuterLink 必須
import { CustomComponent} from './custom';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    CustomComponent, AngularComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CustomComponent, AngularComponent
  ]
})
export class LayoutModule { }
