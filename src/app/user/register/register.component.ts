import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import {NotifierService } from 'src/app/notifier.service' 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userObj:any;
  constructor(private bs:BookService,
    private router:Router,
    private notifierService:NotifierService) { }
  
  
  onLogin(){
    this.router.navigateByUrl("/login")
  }
  onSubmit(formRef){
    if(formRef.valid){
      this.userObj=formRef.value;
      this.bs.createUser(this.userObj).subscribe(
        res=>{
          if(res["message"]=="user existed"){
            // alert("username is already taken.. choose another")
            this.notifierService.showNotification('Username is already taken..','Dismiss');
          }
          else if(res["message"]=="password and confirmpassword should be same"){
            // alert("password & confirm password should be same")
            this.notifierService.showNotification('Password & Confirm Password Should be Same','Dismiss');
          }
          else{
            // alert("user created successfully")
            this.notifierService.showNotification('User Created Successfully','Thank You');
            // this.router.navigateByUrl("/login")
          }
          
        },
        err=>{
          // alert("something went wrong in user creation")
          this.notifierService.showNotification('Something went Wrong in User Creation','Dismiss');
          console.log(err)
        }
      )
    }
    
  }
  
  ngOnInit(): void {
  }

}