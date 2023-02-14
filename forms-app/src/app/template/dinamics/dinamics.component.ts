import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  newGame: string = '';
  person: Person = {
    name: 'Ernesto',
    favourites: [
      { id: 1, name: 'Red Dead Redemption' },
      { id: 2, name: 'Cyberpunk' },
    ],
  };

  save() {}

  addGame() {
    const newGame: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.newGame,
    };
    this.person.favourites.push({...newGame});
    this.newGame='';
  }

  delete(id: number) {
    this.person.favourites.splice(id, 1);
  }
}
