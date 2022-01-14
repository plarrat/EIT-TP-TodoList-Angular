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

  deleteTodoList(indice: number, titre: string) {
    let rep = confirm(
      `Etes-vous sur de vouloir supprimer la Liste : ${titre} ?`
    );

    if (rep === true) this.liste.splice(indice, 1);
  }
}
