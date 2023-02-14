import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  person = {
    gender: '',
    notifications: false,
  }

  termsConditions: boolean =false;
}
