import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    termsConditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true,
  };

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, termsConditions: false });
   
    this.myForm.valueChanges.subscribe(({termsConditions, ...rest}) => {
      //delete form.termsConditions;
      this.person=rest;
    });



    // this.myForm.get('termsConditions')?.valueChanges.subscribe((termsConditions) => {
    //   console.log(termsConditions);
    // });
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.termsConditions;
    this.person = formValue;
  }
}
