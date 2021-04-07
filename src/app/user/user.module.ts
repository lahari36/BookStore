import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { RegisterComponent } from './register/register.component';

import { BooksoverviewComponent } from './booksoverview/booksoverview.component';


@NgModule({
  declarations: [ RegisterComponent, BooksoverviewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
