import { Component } from '@angular/core';
import { Todo } from "../../Todo";
import {TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title:"This is title 1",
        desc:"Description",
        active: true
      },
      {
        sno:2,
        title:"This is title 2",
        desc:"Description",
        active: true
      },{
        sno:3,
        title:"This is title 3",
        desc:"Description",
        active: true
      }
    ]
  }
  deleteTodo(todo: Todo){
    console.log("another one")
  }
}
