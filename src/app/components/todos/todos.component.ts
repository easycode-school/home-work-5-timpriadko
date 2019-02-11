import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos = ['Задача 1', 'Задача 2'];
  constructor() { }

  ngOnInit() {
  }
  // Add new Todo to layout handler
  addNewTodoHandler(value) {
    if (value.length) {
      this.todos.push(value);
    }
  }
}
