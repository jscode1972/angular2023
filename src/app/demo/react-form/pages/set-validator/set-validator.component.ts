import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-set-validator',
  templateUrl: './set-validator.component.html',
  styleUrls: ['./set-validator.component.css']
})
export class SetValidatorComponent implements OnInit {
  form: FormGroup = this.fb.group({
    TaskSn: this.fb.control('0001'),
    Status: this.fb.control('Doing'),
    FinishDate: this.fb.control(''),
  });

  get taskSn(): FormControl {
    return this.form.get('TaskSn') as FormControl;
  }

  get status(): FormControl {
    return this.form.get('Status') as FormControl;
  }

  get finishDate(): FormControl {
    return this.form.get('FinishDate') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.status.valueChanges
      .pipe(map((status) => status === 'Finish'))
      .subscribe({
        next: (isFinish) => {
          if (isFinish) {
            this.finishDate.addValidators(Validators.required);
          } else {
            this.finishDate.removeValidators(Validators.required);
          }
          this.finishDate.updateValueAndValidity();
        },
      });
  }
}
