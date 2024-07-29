import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/rest/todo.service';
import { GetTodoListDTO } from './interfaces/dtos/get-todo-list.dto';
import { CreateTodoDTO } from './interfaces/dtos/create-todo.dto';
import { GeneralFormService } from './services/forms/general-form.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CustomInputComponent, TodoListComponent],
  providers: [TodoService, GeneralFormService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'AngularTestes';

  todoList: GetTodoListDTO[] = [];

  form: FormGroup;

  constructor(
    private todoService: TodoService,
    private formService: GeneralFormService
  ){
    this.form = this.formService.formToCreateToDo;
  }

  ngOnInit(): void {
    this.loadData();
  }

  createTodo() {

    if(this.form.invalid) return;

    const { title, user } = this.form.value; 

    const createBody: CreateTodoDTO = {
      userId: 50,
      title: title,
      body: null
    };

    this.todoService.createTodo(createBody).subscribe({
      next: (newTodo: GetTodoListDTO) => {
        console.log(newTodo);
      },
      error: (err: Error) => {}
    });
  }

  private loadData() {
    this.todoService.getToDoList().subscribe({
      next: (list: GetTodoListDTO[]) => {
        this.todoList = list;
      },
      error: (err: Error) => {}
    });
  }

}
