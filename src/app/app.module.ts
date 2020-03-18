import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './features/hello/hello.component';
import { TodosComponent } from './features/todos/todos.component';
import { TodoComponent } from './features/todo/todo.component';
import { TodoNewComponent } from './features/todo-new/todo-new.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TodosComponent,
    TodoComponent,
    TodoNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
