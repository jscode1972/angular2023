import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { AdminlteModule, LayoutModule } from './layout';
import { AngularModule } from './angular'; // 獨立一塊

// Material-UI: https://material.angular.io/guide/getting-started
// Material-UI: https://material.angular.io/components/tabs/examples
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // 放在根模組,實際應用個別引用

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, // 若要使用 http 連線
    AppRoutingModule,
    //FormsModule, ReactiveFormsModule,
    //
    SharedModule, HomeModule, 
    AdminlteModule, LayoutModule, AngularModule,
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
