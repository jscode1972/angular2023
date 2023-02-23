import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { decimalValidator } from './decimal.validator';

@Component({
  selector: 'app-decimal-validator',
  templateUrl: './decimal-validator.component.html',
  styleUrls: ['./decimal-validator.component.css']
})
export class DecimalValidatorComponent {
  readonly formControl = new FormControl(0, {
    validators: [decimalValidator(2, 1)]
  });
}
