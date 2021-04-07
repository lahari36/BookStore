import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { RegisterComponent } from './register/register.component';

import { BooksoverviewComponent } from './booksoverview/booksoverview.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Search1Pipe } from '../search1.pipe';
@NgModule({
  declarations: [ RegisterComponent, BooksoverviewComponent, UserdashboardComponent, CartComponent, OrdersComponent, WishlistComponent, Search1Pipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class UserModule { }
