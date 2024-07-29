import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { CreateTodoDTO } from './interfaces/dtos/create-todo.dto';
import { GetTodoListDTO } from './interfaces/dtos/get-todo-list.dto';
import { TodoService } from './services/rest/todo.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

class MockTodoServiceData {
  getToDoList(): Observable<GetTodoListDTO[]> { 
    return of([]);
  }
  createTodo(createBody: CreateTodoDTO): Observable<GetTodoListDTO> {
    const { body, title, userId } = createBody;
    const createdToDoMock: GetTodoListDTO = { userId, id: 1, title, body};
    return of(createdToDoMock);
  }
}

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TodoService, useValue: MockTodoServiceData },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AngularTestes' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularTestes');
  });
});

describe('Testando fluxo de inclusão de nova task', () => {

  

});