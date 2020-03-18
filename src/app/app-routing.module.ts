import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './features/todos/todos.component';
import { NotFoundComponent } from './features/page/not-found/not-found.component';
import { AboutComponent } from './features/page/about/about.component';
import { HomeComponent } from './features/page/home/home.component';



const appRoutes: Routes = [
    {
        path: 'todos',
        component: TodosComponent,
        data: { title: 'Todo List 2020' }
    },
    { path: 'about', component: AboutComponent},
    /*
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    */
    { path: '', component: HomeComponent},
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
