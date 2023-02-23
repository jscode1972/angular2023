import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appDecimalValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DecimalValidatorDirective,
      multi: true,
    },
  ],
})
export class DecimalValidatorDirective implements Validator {
  @Input() digitLength!: number;
  @Input() scaleLength!: number;

  validate(control: AbstractControl): ValidationErrors | null {
    if (
      control.value === undefined ||
      control.value === null ||
      control.value === ''
    ) {
      return null;
    }

    const regular = new RegExp(
      `^\\d{1,${this.digitLength}}(\\.\\d{0,${this.scaleLength}})?$`
    );
    return regular.test(control.value)
      ? null
      : {
          decimal: {
            digitLength: this.digitLength,
            scaleLength: this.scaleLength,
          },
        };
  }
}
