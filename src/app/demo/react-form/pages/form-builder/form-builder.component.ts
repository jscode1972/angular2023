import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  // https://stackblitz.com/edit/ng-book-rf-form-builder

  readonly form = this.fb.group({
    User: this.fb.control('沒'),
    Tasks: this.fb.array([]),
  });

  // 另一種宣告方式 (不建議)
  // readonly form = this.fb.group({
  //   User: [],
  //   Tasks: this.fb.array([])
  // });

  get tasks(): FormArray {
    // 要注意的是, FormGroup 的 get 回傳基礎型別 AbstractControl (FormControl, FormGroup, FormArray)
    // 必須轉型 as FormArray
    return this.form.get('Tasks') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tasks.push(
      this.fb.group({
        Subject: this.fb.control('綁?'),
        Context: this.fb.control('定?'),
      })
    );
  }

}
