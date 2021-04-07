import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';

import { Routes, RouterModule } from '@angular/router';
import { BooksoverviewComponent } from './booksoverview/booksoverview.component';
import { RouteGuard } from '../route.guard';

const routes: Routes = [
  
  {path:"register",component:RegisterComponent},
  
  {path:"booksoverview",component:BooksoverviewComponent,canActivate:[RouteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
