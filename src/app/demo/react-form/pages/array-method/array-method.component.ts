import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-array-method',
  templateUrl: './array-method.component.html',
  styleUrls: ['./array-method.component.css']
})
export class ArrayMethodComponent {
  form = this.fb.group({
    tasks: this.fb.array([]),
  });

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  onSetValue(): void {
    this.tasks.patchValue([
      { subject: 'Task A', content: 'Do something...' },
      { subject: 'Task A', content: 'Do something...' },
    ]);
  }

  onAdd(): void {
    const group = this.fb.group({
      subject: this.fb.control(''),
      content: this.fb.control(''),
    });
    this.tasks.push(group);
  }

  onRemove(index: number): void {
    this.tasks.removeAt(index);
  }

  onClear(): void {
    this.tasks.clear();
  }
}
