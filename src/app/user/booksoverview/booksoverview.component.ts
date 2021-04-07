import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booksoverview',
  templateUrl: './booksoverview.component.html',
  styleUrls: ['./booksoverview.component.css']
})
export class BooksoverviewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.clear();
    this.router.navigateByUrl("/home")
  }
}
