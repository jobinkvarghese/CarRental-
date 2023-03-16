import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email1:any=''
  password1:any=''

  constructor(private fs:FireService) {}


  
  login1()
  {
    if(this.email1==='')
    {
      alert('Please enter email')
    }
    else if(this.password1==='')
    {
      alert('Please enter password')
    }
    let userDetails={
      email:this.email1,
      password:this.password1,

  }
  this.fs.loginfn(userDetails)
  this.email1=''
  this.password1=''
}


}
