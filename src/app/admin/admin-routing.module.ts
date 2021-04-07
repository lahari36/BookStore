import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { RouteGuard } from '../route.guard';

import { BooklistComponent } from './booklist/booklist.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
 
  { path:"addbook",component:AddbookComponent,canActivate:[RouteGuard] },
  { path:"booklist",component:BooklistComponent ,canActivate:[RouteGuard]},
  { path:"userlist",component:UserlistComponent,canActivate:[RouteGuard] },
  { path:"register",component:RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
