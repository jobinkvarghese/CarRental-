import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import {Firestore,collection,doc,addDoc,setDoc} from '@angular/fire/firestore'
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {


  paymentHandler: any = null;

  constructor(private hero:HeroService){}

  data=this.hero.givData()
  
  single :any
  ngOnInit(){

    this.invokeStripe();
    let id= Number(localStorage.getItem('id'))
    this.single=data.filter(e => e.id==id)//filteration //arrrow function
    console.log("name",this.single)
  }
  

  // ngOnInit() {
  //   this.invokeStripe();
  // }

  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mlt3iSEKovg0W7BMbqy8ICDUzijHsZU5jdWYd7HgsqNOouQ2AA7SPVw4fqRKj7jC8pv5mpHMv8FOAf50xFEkEk500ehlspYXg',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        // alert('Stripe token generated!');
        // alert('Payment has been successfull!');
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          showConfirmButton: false,
          timer: 1600
        }); 
        this.router.navigate(['/login']);
    
      },
      
    })
    

    paymentHandler.open({
      name: 'Pay Now',
      description: 'Credit Card Visa',
      // amount: amount * 100,
    });
    
  }
  

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Mlt3iSEKovg0W7BMbqy8ICDUzijHsZU5jdWYd7HgsqNOouQ2AA7SPVw4fqRKj7jC8pv5mpHMv8FOAf50xFEkEk500ehlspYXg',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      

      window.document.body.appendChild(script);
    }
  }
  

}
