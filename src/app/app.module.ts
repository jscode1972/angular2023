import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 用到再加
// Ngx-Translate 翻譯工具
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// 專案主體
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//
import { SharedModule } from './shared';
import { LayoutModule, AdminlteModule } from './layout';
import { HomeModule } from './home';
import { DemoModule  } from './demo/demo.module';
import { AngularModule } from './angular'; // 獨立一塊

// Material-UI: https://material.angular.io/guide/getting-started
// Material-UI: https://material.angular.io/components/tabs/examples
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // 放在根模組,實際應用個別引用
// 建立TranslateHttpLoader作為語系檔的讀取器
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, // 若要使用 http 連線
    //FormsModule, ReactiveFormsModule, // 用到再加
    AppRoutingModule,
    SharedModule, LayoutModule, AdminlteModule, 
    HomeModule, DemoModule, AngularModule,
    // material UI => BrowserAnimationsModule, 
    // 翻譯工具 將 TranslateHttpLoader作為 TranslateModule 的語系檔讀取器(loader)
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [
  ],
  providers: [
    { provide: Window, useValue: window }     // 匯入 window 物件, 可使用 DI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
