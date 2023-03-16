import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.css']
})
export class EconomyComponent {
  
  constructor(private router: Router, private hero:HeroService){}
  artform=this.hero.givData();
  // ngOninit():void{
  //  this.artforms=data;

   gotohere(id:any){
    localStorage.setItem('id', id);
    this.router.navigate(['/economysingle']);
   }
  // artform=data
  // ngOninit():void{
  //   this.artform=data

}
