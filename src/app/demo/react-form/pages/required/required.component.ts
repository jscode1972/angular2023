import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,
         Validators, } from '@angular/forms';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.css']
})
export class RequiredComponent {

  // https://stackblitz.com/edit/ng-book-rf-required
  // 方法三
  // readonly form = this.fb.group({
  //   id: this.fb.control('', [Validators.required]),
  //   password: this.fb.control('')
  // });

  // 方法四
  readonly form = this.fb.group({
    id: this.fb.control('', { validators: [Validators.required] }),
    password: this.fb.control(''),
  });

  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  // 方法一
  // readonly form = new FormGroup({
  //   id: new FormControl('', [Validators.required]),
  //   password: new FormControl(''),
  // });

  // 方法二
  // readonly form = new FormGroup({
  //   id: new FormControl('', { validators: [Validators.required] }),
  //   password: new FormControl(''),
  // });

}
