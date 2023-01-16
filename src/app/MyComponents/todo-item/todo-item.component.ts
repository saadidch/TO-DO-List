import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo!: Todo;
}
