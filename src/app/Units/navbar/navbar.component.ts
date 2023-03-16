import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private fs:FireService){}
  // constructor(public afa:AngularFireAuth)
  signout()
  {
    this.fs.signout1()
  }

}
