import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';

import { Routes, RouterModule } from '@angular/router';
import { BooksoverviewComponent } from './booksoverview/booksoverview.component';
import { RouteGuard } from '../route.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  { path: "register", component: RegisterComponent },
  { path: "userdashboard", component: UserdashboardComponent },
  { path: "cart", component: CartComponent },
  { path: "orders", component: OrdersComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "booksoverview", component: BooksoverviewComponent, canActivate: [RouteGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
