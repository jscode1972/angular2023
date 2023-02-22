import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form-test',
  templateUrl: './ng-form-test.component.html',
  styleUrls: ['./ng-form-test.component.css']
})
export class NgFormTestComponent {
  xyz = '';

  onSearch1(): void {
    //https://stackblitz.com/edit/ng-book-tdf-model
    console.log(`查詢條件：${this.xyz}`);
  }

  onSearch2(condition: NgModel): void {
    //https://stackblitz.com/edit/ng-book-tdf-variable
    console.log(`查詢條件：${condition.value}`);
  }

  onSubmit(form: NgForm): void {
    console.log('表單資料：', form.value);
  }
}
