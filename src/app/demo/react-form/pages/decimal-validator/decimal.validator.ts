import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function decimalValidator(
  digitLength: number,
  scaleLength: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      control.value === undefined ||
      control.value === null ||
      control.value === ''
    ) {
      return null;
    }

    const regular = new RegExp(
      `^\\d{1,${digitLength}}(\\.\\d{0,${scaleLength}})?$`
    );
    return regular.test(control.value)
      ? null
      : { decimal: { digitLength, scaleLength } };
  };
}

