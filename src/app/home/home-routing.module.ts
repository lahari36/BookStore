import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from '../route.guard';

import { BookviewComponent } from './bookview/bookview.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"category",component:CategoryComponent},
  {path:"bookview",component:BookviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
