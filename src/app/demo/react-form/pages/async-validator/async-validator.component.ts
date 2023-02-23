import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.css']
})
export class AsyncValidatorComponent {
  readonly form = this.fb.group({
    id: this.fb.control('', {
      asyncValidators: [this.shouldBeExists],
      updateOn: 'blur',
    }),
    password: this.fb.control(''),
  });

  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  constructor(private fb: FormBuilder, private userSerivce: UserService) {}

  shouldBeExists( control: AbstractControl ): Observable<ValidationErrors | null> {
    if (
      control.value === undefined ||
      control.value === null ||
      control.value === ''
    ) {
      return of(null);
    }

    return this.userSerivce
      .isExists(control.value)
      .pipe(map((isExists) => (isExists ? null : { shouldBeExists: true })));
  }
}
