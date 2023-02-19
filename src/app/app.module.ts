import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { AdminlteModule, CustomModule } from './layout';

// Material-UI: https://material.angular.io/guide/getting-started
// Material-UI: https://material.angular.io/components/tabs/examples
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // 放在根模組,實際應用個別引用

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, //FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    //
    SharedModule, HomeModule, AdminlteModule, CustomModule,
    // material UI => BrowserAnimationsModule, 
  ],
  exports: [

  ],
  providers: [
    { provide: Window, useValue: window }     // 匯入 window 物件, 可使用 DI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
