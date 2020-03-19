import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './features/todos/todos.component';
import { NotFoundComponent } from './features/page/not-found/not-found.component';
import { AboutComponent } from './features/page/about/about.component';
import { HomeComponent } from './features/page/home/home.component';
import { TodoItemComponent } from './features/page/todo-item/todo-item.component';
import { RandomGuard } from './core/guard/random.guard';



const appRoutes: Routes = [
    {
        path: 'todos',
        component: TodosComponent,
        data: { title: 'Todo List 2020' }
    },
    { path: 'todo/:todoId', component: TodoItemComponent },
    { path: 'todo', component: TodoItemComponent },
    { path: 'about', component: AboutComponent, canActivate: [RandomGuard]},
    /*
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    */
    { path: '', component: HomeComponent},
    { path: '404', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
