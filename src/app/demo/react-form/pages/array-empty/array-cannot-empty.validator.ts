import { FormArray, ValidationErrors } from '@angular/forms';

export function arrayCannotEmpty(formArray: FormArray): ValidationErrors | null {
  if (formArray.length === 0) {
    return { cannotEmpty: true };
  }
  return null;
}

