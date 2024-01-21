import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'; 
import { Todo } from '../todo';
import { faList, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  faList = faList;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodoList();
  }

  loadTodoList(): void {
    this.todoService.getTodoList().subscribe(
      (todos: Todo[]) => {
        this.todoList = todos;
      },
      (error) => {
        console.error('Error fetching todo list', error);
      }
    );
  }
  displayTodoDetail(todo: Todo): void {
  
    console.log('Displaying todo details:', todo);
  }
  updateTodo(todo: Todo): void {
   
    console.log('Updating todo:', todo);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(
      () => {
        
        this.loadTodoList();
      },
      (error) => {
        console.error('Error deleting todo', error);
      }
    );
  }
}

