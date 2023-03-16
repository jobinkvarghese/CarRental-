import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username:any=''
  email:any=''
  pass:any=''
  cpass:any=''
constructor(private fs:FireService) {}



signUp() {


  this.validation()
  let userDetails={
    username:this.username,
    email:this.email,
    password:this.pass,
   
  }
  this.fs.registration(userDetails)
  this.username=''
  this.email=''
  this.pass=''
  this.cpass=''
}

validation()
{
  if(this.username==='')
  {
    alert('Please enter username')
  }

  else if(this.email==='')
  {
    alert('Please enter email')
  }
  
  else if(this.pass==='')
  {
    alert('Please enter password')
  }
  else if(this.cpass==='')
  {
    alert('Please enter confirm password')
  }
  
  else if(this.cpass!=this.pass)
  {
    alert('Password does not match')
  }
}
}
