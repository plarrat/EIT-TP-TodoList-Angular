import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  liste: any;
  inputTodoList: string;

  constructor() {
    this.liste = [];
    this.inputTodoList = '';
  }

  addTodoList(): null {
    let titre = this.inputTodoList.trim();
    if (titre.length === 0) return null;
    this.liste.push(titre);
    this.inputTodoList = '';
    return null;
  }
}
