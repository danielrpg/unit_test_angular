import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { Todo } from './todo';

fdescribe('TodoService', () => {
  let service: TodoService;
  let httpTestingMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TodoService
      ]
    });
    service = TestBed.inject(TodoService);
    httpTestingMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    httpTestingMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createTodo should send a POST and return the newly created todo', () => {
    const itemMock: Todo = {
      userId: 2,
      id: 2,
      title: 'Walk Dog',
      completed: false
    };

    service.createTodo(itemMock).subscribe ((data: Todo) => {
      expect(data).toBeDefined();
      expect(data).toEqual(itemMock);
    }, (error) => {
      fail(error.message)
    });

    const testMockRequest = httpTestingMock.expectOne('https://jsonplaceholder.typicode.com/todos');
    expect(testMockRequest.request.method).toBe('POST');
    testMockRequest.flush(itemMock);
  });

  it(`getSingleTodo should send GET request and return a single todo`, () => {
    const itemMock: Todo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    };

    service.getSingleTodo(1).subscribe(
      (todo: Todo) => {
        expect(todo).toBeDefined();
        expect(todo).toBe(itemMock);
        expect(todo.id).toBe(1);
      }, (error) => {
        fail(error.message);
      });

      const testMockRequest = httpTestingMock.expectOne('https://jsonplaceholder.typicode.com/todos/1');
      expect(testMockRequest.request.method).toBe('GET');
      testMockRequest.flush(itemMock);

    });

});

