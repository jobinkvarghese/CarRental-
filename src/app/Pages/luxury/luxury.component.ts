import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.css']
})
export class LuxuryComponent {

  constructor(private router: Router, private hero:HeroService){}
  car=this.hero.givData();
  // ngOninit():void{
  //  this.artforms=data;

   gotohere(id:any){
    localStorage.setItem('id', id);
    this.router.navigate(['/luxurysingle']);
   }
  // artform=data
  // ngOninit():void{
  //   this.artform=data
}
