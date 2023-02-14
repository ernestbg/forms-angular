import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  cantBeErnestbg,
  emailPattern,
  nameSurnamePattern,
} from 'src/app/shared/validators/validators';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

 

  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(this.vs.nameSurnamePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidator],
      ],
      userName: ['', [Validators.required, this.vs.cantBeErnestbg]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: [this.vs.sameFields('password', 'repeatPassword')],
    }
  );

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  get emailErrorMessage(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'email required';
    } else if (errors?.pattern) {
      return 'email format not valid';
    } else if (errors?.emailUsed) {
      return 'email already in used';
    }
    return '';
  }

  ngOnInit(): void {
    this.myForm.reset({
      name: '',
      email: '',
      userName: '',
    });
  }



 

  validField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    this.myForm.markAllAsTouched();
  }
}
