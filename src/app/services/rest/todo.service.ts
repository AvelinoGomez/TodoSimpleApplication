import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTodoListDTO } from '../../interfaces/dtos/get-todo-list.dto';
import { CreateTodoDTO } from '../../interfaces/dtos/create-todo.dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {}

  getToDoList(): Observable<GetTodoListDTO[]> {
    return this.httpClient.get<GetTodoListDTO[]>('https://jsonplaceholder.typicode.com/todos');
  }

  createTodo(createBody: CreateTodoDTO): Observable<GetTodoListDTO> {
    return this.httpClient.post<GetTodoListDTO>('https://jsonplaceholder.typicode.com/posts', createBody);
  }

}
