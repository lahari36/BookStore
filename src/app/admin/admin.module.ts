import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [ AddbookComponent, BooklistComponent, UserlistComponent, RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
