import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'signin', component: TodoReactiveFormComponent },
  { path: 'new', component: TodoTemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
