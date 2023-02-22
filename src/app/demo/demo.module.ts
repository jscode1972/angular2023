import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent, RxjsComponent, W2uiComponent, TdfFormTestComponent, ReactiveFormTestComponent } from './pages';
import { NgFormTestComponent } from './pages/ng-form-test/ng-form-test.component';
import { DecimalValidatorDirective } from './pages/tdf-form-test/decimal-validator.directive';

@NgModule({
  declarations: [
    DemoComponent,
    RxjsComponent,
    W2uiComponent,
    TdfFormTestComponent,
    ReactiveFormTestComponent,
    NgFormTestComponent,
    DecimalValidatorDirective  // 自訂驗證
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule, BrowserModule, FormsModule, ReactiveFormsModule
  ]
})
export class DemoModule { }
