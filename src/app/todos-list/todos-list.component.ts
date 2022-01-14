import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  todos: string[] = [];
  inputTodos: string = '';

  @Input() titre!: string;
  @Input() search!: string;

  constructor() {}

  ngOnInit(): void {}

  addTodos() {
    let todo: string = this.inputTodos.trim();
    if (todo.length === 0) return null;

    let existe: number = this.todos.indexOf(todo);
    if (existe > -1) return null;
    this.todos.push(this.inputTodos);
    this.inputTodos = '';
    return null;
  }

  deleteTodos(i: number) {
    this.todos.splice(i, 1);
  }

  updateTodos(indice: number, todo: string): void {
    let res = prompt('Modifier la todo', todo);
    if (res !== null && res.trim().length > 0) this.todos[indice] = res;
  }
}
