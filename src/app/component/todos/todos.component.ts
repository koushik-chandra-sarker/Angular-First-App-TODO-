import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('todos');

    if(this.localItem == null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localItem)

    }
    
  }

  ngOnInit(): void {
  }
  saveTodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
   
  }

  deleteTodo(todo:Todo){
    this.todos.splice(this.todos.indexOf(todo), 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  togglecheckBoxClick(todo:Todo){
    console.log(this.todos[this.todos.indexOf(todo)].active)
    this.todos[this.todos.indexOf(todo)].active = !this.todos[this.todos.indexOf(todo)].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
    console.log(this.todos[this.todos.indexOf(todo)].active)
  }
}
