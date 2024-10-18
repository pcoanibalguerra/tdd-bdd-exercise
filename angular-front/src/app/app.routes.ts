import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { RomanConverterComponent } from './roman-converter/roman-converter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home screen route
    { path: 'todo-app', component: TodoAppComponent },
    { path: 'romans', component: RomanConverterComponent },
    { path: '**', redirectTo: '' }, // Redirect unknown paths to home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
