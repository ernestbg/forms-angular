import { Component } from '@angular/core';

interface ItemMenu {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: ItemMenu[] = [
    {
      text: 'Basics',
      route: './template/basics',
    },
    {
      text: 'Dinamics',
      route: './template/dinamics',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];

  reactiveMenu: ItemMenu[] = [
    {
      text: 'Basics',
      route: './reactive/basics',
    },
    {
      text: 'Dinamics',
      route: './reactive/dinamics',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];


  authMenu: ItemMenu[] = [
    {
      text: 'Login',
      route: './auth/login',
    },
    {
      text: 'Register',
      route: './auth/register',
    }
  ];
}
