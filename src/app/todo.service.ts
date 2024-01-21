import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  deleteTodo(todoOrId: Todo | number): Observable<void> {
    const todoId = typeof todoOrId === 'number' ? todoOrId : todoOrId.id;
    const url = `${this.apiUrl}/${todoId}`;
    return this.httpClient.delete<void>(url);
  }
}
