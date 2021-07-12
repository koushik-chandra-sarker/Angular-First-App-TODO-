import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo-save',
  templateUrl: './todo-save.component.html',
  styleUrls: ['./todo-save.component.css']
})
export class TodoSaveComponent implements OnInit {
  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter()
  

  title!: string
  description!: string
  active: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      title: this.title,
      decription: this.description,
      active: false
    }
    this.saveTodo.emit(todo)
  }
 

}
