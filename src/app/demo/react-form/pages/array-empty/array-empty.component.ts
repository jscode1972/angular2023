import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { arrayCannotEmpty } from './array-cannot-empty.validator';

@Component({
  selector: 'app-array-empty',
  templateUrl: './array-empty.component.html',
  styleUrls: ['./array-empty.component.css']
})
export class ArrayEmptyComponent {
  readonly form = this.fb.group({
    tasks: this.fb.array([], {
      // 此範例有錯 2023/02/23
      // validators: [arrayCannotEmpty],
    }),
  });

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  constructor(private fb: FormBuilder) {}
}
