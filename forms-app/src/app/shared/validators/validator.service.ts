import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  public nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  cantBeErnestbg = (control: FormControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'ernestbg') {
      return { noErnestbg: true };
    }
    return null;
  };

  sameFields(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(field1)?.value;
      const repeatPassword = formGroup.get(field2)?.value;

      if (password !== repeatPassword) {
        formGroup.get(field2)?.setErrors({notSame:true})
        return { notSame: true };
      }
      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
