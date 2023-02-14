import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array(
      [
        ['Cyberpunk', Validators.required],
        ['Read Dead Redemption', Validators.required],
      ],
      Validators.required
    ),
  });

  addFavourite() {
    if (this.newFavourite.invalid) {
      return;
    }
    this.favouritesArray.push(
      new FormControl(this.newFavourite.value, Validators.required)
    );
    //this.favouritesArray.push(this.fb.control(this.newFavourite.value,Validators.required));
    this.newFavourite.reset();
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }

  delete(id: number) {
    this.favouritesArray.removeAt(id);
  }

  get favouritesArray() {
    return this.myForm.get('favourites') as FormArray;
  }

  fieldIsValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  newFavourite: FormControl = this.fb.control('', Validators.required);
}
