import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  liste: any;

  constructor() {
    this.liste = ['Jeux à terminer', 'Series Netflix', 'Devoirs'];
  }
}
