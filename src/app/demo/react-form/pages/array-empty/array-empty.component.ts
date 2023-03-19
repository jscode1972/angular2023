import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { arrayCannotEmpty, tooManyValidator } from './array-cannot-empty.validator';

@Component({
  selector: 'app-array-empty',
  templateUrl: './array-empty.component.html',
  styleUrls: ['./array-empty.component.css']
})
export class ArrayEmptyComponent {
  readonly form = this.fb.group({
    tasks: this.fb.array([], {
      // 此範例有錯 2023/02/23
      validators: [arrayCannotEmpty, tooManyValidator(2) ],
    }),
  });
  
  constructor(private fb: FormBuilder) {}

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  onAdd() {
    this.tasks.push(
      this.fb.group({
        Subject: '主題',
        Content: '內容'
      })
    );
  }

  onDel() {
    if (this.tasks.length>0) {
      this.tasks.removeAt(0);
    }
  }
}
