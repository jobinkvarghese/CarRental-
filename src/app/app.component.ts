import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FireService } from './fire.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini_project';

  // constructor(public afa : AngularFireAuth) { }  

  showHeader=true;
  constructor(private router:Router){



    router.events.subscribe(

       (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/login'){
            this.showHeader=false
          }
         else if(val.url=='/signup'){
            this.showHeader=false
          }
          else if(val.url=='/'){
            this.showHeader=false
          }
          else{
            this.showHeader=true
          }
        }
       }


    )
  }

}
