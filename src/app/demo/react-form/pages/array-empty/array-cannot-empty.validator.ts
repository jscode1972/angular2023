import { AbstractControl, FormArray, ValidatorFn, ValidationErrors } from '@angular/forms';

/*export function arrayCannotEmpty(formArray: FormArray): ValidationErrors | null {
  if (formArray.length === 0) {
    return { cannotEmpty: true };
  }
  return null;
}*/

export function arrayCannotEmpty(formArray: AbstractControl): ValidationErrors | null {
  // 必須符合格式 FormArray(x) => AbstractControl(o)
  if ((formArray as FormArray).length === 0) { // 轉型
    return { cannotEmpty: true };
  }
  return null;
}

export function tooManyValidator(maxLength : number) : ValidatorFn {
  // 參考 decimal validatior 版本帶入參數
  return (control: AbstractControl) : ValidationErrors | null => {
    const check = (control as FormArray).length >= 2;
    return check ? { tooMany: true } : null;
  }
}
