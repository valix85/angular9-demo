import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './features/hello/hello.component';
import { TodosComponent } from './features/todos/todos.component';
import { TodoComponent } from './features/todo/todo.component';
import { TodoNewComponent } from './features/todo-new/todo-new.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './features/page/not-found/not-found.component';
import { AboutComponent } from './features/page/about/about.component';
import { NavbarComponent } from './features/ui/navbar/navbar.component';
import { HomeComponent } from './features/page/home/home.component';
import { FooterComponent } from './features/ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TodosComponent,
    TodoComponent,
    TodoNewComponent,
    NotFoundComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
