import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from 'src/app/core/model/todo';
import {TodoService} from 'src/app/core/services/todo.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'nxt-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy  {

  items: Todo[] = [
    /*
    {
      id: 104,
      title: 'Fare la spesa',
      content: 'Latte, uova, pane, ecc...',
      done: false
    },
    {
      id: 105,
      title: 'Lavare la macchina',
      content: 'Prendere tutti gli accessori del caso',
      done: false
    },
    {
      id: 106,
      title: 'Pagare l\'assicurazione',
      content: 'Caricare carta per pagare assicurazione',
      done: false
    }
    */
  ];

  obs1: Subscription;

  constructor(private todoService: TodoService) {
    this.obs1 = todoService.getTodos()
      .subscribe(risp => {
        this.items = risp;
      });
  }

  ngOnInit(): void {
  }

  generaTodo(): void {
    const idx = Math.floor(Math.random() * 100);
    const tmp: Todo = {
      // id: idx,
      id: undefined,
      title: 'titolo tmp' + idx,
      content: 'bla bla bla...',
      done: false
    };
    // console.log(tmp);
    this.aggiungiTodo(tmp);
    // this.items = this.todoService.getTodos();
  }

  cambiaStato(item: Todo): void {
    this.todoService.switchState(item.id)
      .subscribe(dati => {
        // se ok riscarico i dati
        this.todoService.getTodos()
          .subscribe(risp2 => {
            this.items = risp2;
          });
      });
    // this.items = this.todoService.getTodos();
  }

  cancellaTodo(item: Todo): void {
    // console.log('cancello: ', item);
    this.todoService.deleteTodo(item.id)
      .subscribe(dati => {
        // se ok riscarico i dati
        this.todoService.getTodos()
          .subscribe(risp2 => {
            this.items = risp2;
          });
      });
    // this.items = this.todoService.getTodos();
  }

  aggiungiTodo(todo: Todo): void {
    this.todoService.addTodo(todo)
      .subscribe(risp => {
        this.todoService.getTodos()
          .subscribe(risp2 => {
            this.items = risp2;
          });
      });
    // this.items = this.todoService.getTodos();

  }


  cancellaSottoscizioni() {
    this.obs1.unsubscribe();
  }

  ngOnDestroy(): void {
    console.log('distruggo il componente Todos');
    this.cancellaSottoscizioni();
  }
}
