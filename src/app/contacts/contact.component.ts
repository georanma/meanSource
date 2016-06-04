
import { Component } from '@angular/core';


@Component({
  selector: 'contact'
})

export class ContactComponent {
  name: string;
  email: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}