import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items: Todo[] = [];
  baseUrl: string = env.url;

  constructor(private ls: StorageService, private http: HttpClient ) {
    /*
    const todos: any = ls.getProp('todos');
    if (todos) {
      // JSON.parse(todos).forEach(el => this.items.push(el));
      this.items = JSON.parse(todos);
    }
    */
    this.getAsyncData();
    console.log('dopo async');
  }

  addTodo(item: Todo): Observable<Todo> {
    // this.items.push(item);
    if (!item.id) {
      // trovo id maggiore e sommo 1
      const maxIdx = Math.max(...this.items.map( ({id}) => id  ));
      // console.log(maxIdx);
      // se non ho oggetti parto da id = 1
      item = {...item, ...{id: maxIdx < 0 ? 1 : maxIdx + 1}};
      // throw "id non valido";
    }
    this.items = [...this.items, item];
    // this.ls.saveProp('todos', this.items);
    return this.http.post<Todo>( `${this.baseUrl}/todos`, item );
  }

  getTodos(): Observable<Todo[]> {
    // return this.items;
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`)
    .pipe(
      retry(1), // prova una volta e poi vai oltre
      catchError(this.errorHandler) // cattura errore e fallo gestire alla function nel parametro
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  switchState(id: number): Observable<Todo> {
    const idx = this.items.findIndex(el => el.id === id);
    this.items[idx].done = !this.items[idx].done;
    // this.ls.saveProp('todos', this.items);
    return this.http.put<Todo>(`${this.baseUrl}/todos/${id}`, this.items[idx]);
  }

  deleteTodo(id: number): Observable<Todo> {
    this.items = this.items.filter( ({id: todoId}) => todoId !== id);
    // this.ls.saveProp('todos', this.items);
    return this.http.delete<Todo>(`${this.baseUrl}/todos/${id}`);
  }




  async getAsyncData() {
   const data = await this.http.get<Todo[]>(`${this.baseUrl}/todos`).toPromise();
   this.items = data;
   console.log('dopo await', this.items );
   return ;
  }


  // handle error with interceptor or custom function
  // https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
  // https://www.positronx.io/angular-error-handling-tutorial-with-examples/
  // https://www.positronx.io/angular-8-httpclient-http-tutorial-build-consume-restful-api/#tc_4439_07

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
