import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/core/model/todo';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'nxt-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  item: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /*
    // v1 sperimentale
    this.route.paramMap.subscribe(
      dati => {
        this.todoService.getTodoById(dati.params.todoId)
            .subscribe(risp => this.item = risp);
    });
    */

    console.log(history.state);
    const data = history.state?.todoItem;

    if (data) {
      this.item = data;
    } else {
    // v2 angular style
   this.route.paramMap.pipe(
      switchMap(params => of<number>(+params.get('todoId')))
     )
     .subscribe(id => id > 0 ? this.getData(id) : this.to404() );

   }
  } // end init


  getData = (id) => this.todoService.getTodoById(id)
                        .subscribe(risp => this.item = risp)

  to404() {
    // carica la view di not found senza cambiare l'url
    this.router.navigateByUrl('/404', {skipLocationChange: true});
  }

} // end class
