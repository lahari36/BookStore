import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {NotifierService } from 'src/app/notifier.service' 

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  booksArray=[];
  p:any;
  obj:any;
  username=localStorage.getItem("username")
  constructor(private bs:BookService,private router:Router,private snackBar: MatSnackBar,
    private notifierService:NotifierService ) { }
  openSnackBar(message){
    this.snackBar.open(message)
  }
  ans=new Array();
  ngOnInit(): void {
    this.bs.getBooks().subscribe(
      res=>{
        this.booksArray=res.message;
        //console.log(this.booksArray)
        for(let i=0;i<this.booksArray.length;i++){
          this.ans.push(this.booksArray[i].category)
        }
        //this.ans=this.ans.filter((element,i)=>i === this.ans.indexOf(element))
        //console.log(this.ans)
      },
      err=>{
        this.notifierService.showNotification('Something went wrong in getting books','Dismiss');
        console.log(err);
      }
      
    )
    
  }
  onLogout(){
    localStorage.clear();
    this.router.navigateByUrl("/home")
  }
  onDelete(i){
    this.obj=this.booksArray[i];
    let booktitle=this.obj.booktitle;
    //console.log(booktitle);
    this.bs.deleteBook(booktitle).subscribe(
      res=>{
        if(res.message=="book deleted"){
          // alert("book deleted successfully")
          this.notifierService.showNotification('User Deleted Successfully','Dismiss');
        }
      },
      err=>{
        this.notifierService.showNotification('Something Went Wrong in book deletion','Dismiss');
        // alert("something went wrong in book deletion")
        console.log(err)
      }
    )
  }
}


