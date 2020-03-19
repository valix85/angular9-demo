import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/model/todo';
import { Router } from '@angular/router';


@Component({
  selector: 'nxt-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() item: Todo;
  @Output() changeState: EventEmitter<Todo> = new EventEmitter();
  @Output() delete: EventEmitter<Todo> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.item);
  }

  completa(): void  {
    // la logica deve farla il service!
    // this.item.done =  !this.item.done;
    this.changeState.emit(this.item);
  }

  cancella(): void {
    this.delete.emit(this.item);
  }

  vaiATodo(): void {
    this.router.navigateByUrl(`/todo/${this.item.id}`);
  }

  vaiATodoObj(): void {
    this.router.navigate(['/todo'],
    // {state: { data: { ...{mynode: {...this.item} } } } }
    { state : {todoItem: this.item }   }
    );
  }

} // end class
