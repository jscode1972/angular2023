import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router'; // reuterLink 必須
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
// 自訂元件
import { ModalsModule } from './modals/modals.module';
import { ButtonsModule } from './buttons/buttons.module';
import { CardsModule } from './cards/cards.module';
import { AnchorDirective } from './directives';
import { UtcToLocalTimePipe, MyTranslatePipe } from './pipes';

@NgModule({
  declarations: [
    AnchorDirective,
    // pipes
    UtcToLocalTimePipe, MyTranslatePipe
  ],
  imports: [
    CommonModule, // RouterModule
    // 匯入外部元件,統一匯出使用
    TranslateModule,
    // 自訂元件
    ModalsModule, ButtonsModule, CardsModule, 
  ],
  exports: [
    // 外部元件 re-exports 統一匯出
    TranslateModule,
    // 自訂元件 匯出
    ModalsModule, ButtonsModule, CardsModule,
    // 匯出 pipes
    UtcToLocalTimePipe, MyTranslatePipe
  ]
})
export class SharedModule { }
