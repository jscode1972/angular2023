import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyComponent } from './fancy.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    FancyComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FancyComponent
  ]
})
export class FancyModule { }
