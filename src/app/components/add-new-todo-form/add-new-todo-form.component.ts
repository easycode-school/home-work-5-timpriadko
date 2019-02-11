import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-todo-form',
  templateUrl: './add-new-todo-form.component.html',
  styleUrls: ['./add-new-todo-form.component.css']
})
export class AddNewTodoFormComponent implements OnInit {
  @Output() addNewTodo = new EventEmitter();
  public todos = [];
  public newTodo = '';
  constructor() { }

  ngOnInit() {
  }
  // Form submit handler
  onSubmitHandler(form) {
    this.addNewTodo.emit(this.newTodo);
    form.resetForm();
  }

}
