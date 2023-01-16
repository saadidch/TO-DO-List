import { Component } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string;
  todos:Todo[];
  constructor() {
    // @ts-ignore
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo){
    console.log("Delete");
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log("Add");
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
