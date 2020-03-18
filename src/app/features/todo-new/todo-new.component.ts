import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/core/model/todo';

@Component({
  selector: 'nxt-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  dati = {titolo: '', contenuto: ''};

  constructor() { }t

  ngOnInit(): void {
  }

  creaTodo(form: NgForm): void {
    // console.log('submit', form);
    let todo: Todo = {
      id: undefined,
      title: '',
      content: '',
      done: false
    };
    todo = {...todo, ...{title: form.value.titolo, content: form.value.contenuto} };
    form.reset();
    // console.log(todo);
    this.addTodo.emit(todo);

  } // end creaTodo

} // end class
