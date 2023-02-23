import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  // https://stackblitz.com/edit/ng-book-rf-form-array

  // 書本勘誤：在此範例所在的章節 (8.1.4) 說明中，
  // 錯誤：FormArray 必須定義在 FormGroup 內 ...
  // 正確：當我們在頁面中利用 FormArrayName 顯示資料時，必須把 FormArray 定義在 FromGroup 內 ...
  readonly form = new FormGroup({
    Tasks: new FormArray([]),
  });

  get tasks(): FormArray {
    return this.form.get('Tasks') as FormArray;
  }

  ngOnInit(): void {
    this.AutoPush();
    this.AutoPush();
  }

  AutoPush() {
    this.tasks.push(
      new FormGroup({
        Subject: new FormControl('自動'),
        Content: new FormControl('新增'),
      })
    );
  }

}
