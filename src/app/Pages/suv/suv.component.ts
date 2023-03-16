import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-suv',
  templateUrl: './suv.component.html',
  styleUrls: ['./suv.component.css']
})
export class SuvComponent {
  constructor(private router: Router, private hero:HeroService){}
  car=this.hero.givData();
  // ngOninit():void{
  //  this.artforms=data;

   gotohere(id:any){
    localStorage.setItem('id', id);
    this.router.navigate(['/suvsingle']);
   }
  // artform=data
  // ngOninit():void{
  //   this.artform=data
}

