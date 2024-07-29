import { Component, Input } from '@angular/core';
import { GetTodoListDTO } from '../../interfaces/dtos/get-todo-list.dto';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  @Input() todoList: GetTodoListDTO[] = [];

}
