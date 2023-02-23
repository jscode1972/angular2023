import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-set-value',
  templateUrl: './set-value.component.html',
  styleUrls: ['./set-value.component.css']
})
export class SetValueComponent {
  readonly form = this.fb.group({
    subject: this.fb.control(''),
    content: this.fb.control(''),
  });

  constructor(private fb: FormBuilder) {}

  onSetValue(): void {
    // 此範例恰是因為 setValue 需要完整輸入所有屬性, 故無法編譯 => remark
    // this.form.setValue({ subject: 'Task A' });
  }

  onPatchValue(): void {
    this.form.patchValue({ subject: 'Task A' });
  }

  onReset(): void {
    this.form.reset({ subject: '', content: '' });
  }
}
