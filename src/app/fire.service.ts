import { Injectable } from '@angular/core';
import {Firestore,collection,doc,addDoc,setDoc} from '@angular/fire/firestore'
import { Router } from '@angular/router';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}from '@angular/fire/auth'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  
  
  constructor(private auth:Auth,private fires:Firestore,private router:Router) { }

  registration(userDetails:any)
  {
      createUserWithEmailAndPassword(this.auth,userDetails.email,userDetails.password).then(res=>{
        const uid=res.user.uid;
        const usercollection = doc(this.fires,'users',uid)
        let user={
          "name":userDetails.username,
          "email":userDetails.email
        }
        setDoc(usercollection,user).then((res) =>{
          console.log(res);
          // alert('signed up successfully')
          Swal.fire({
            icon: 'success',
            title: 'Signed up successfully',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/login']);
        }).catch((err) =>{
         console.log(err);
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        });
        })
        // console.log(res.user.uid,res.user.email);
      }).catch(err=>{
        console.log(err);
      })
  }
  loginfn(userDetails:any)
  {
    signInWithEmailAndPassword(this.auth,userDetails.email,userDetails.password).then(res=>{
      //alert('signed in succesfully')
      Swal.fire({
        icon: 'success',
        title: 'Signed in successfully',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/home']);
      
    }).catch((err) =>
    {
      alert(err)
    })
        
  }
  signout1()
  {
    signOut(this.auth).then(res=>{
      //alert('signed out successfully')
      Swal.fire({
        icon: 'success',
        title: 'signed out successfully',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/login']);
    }).catch((err)=>
    {
      alert(err)
    }
    )
    {
      
    }

  }
  contactus1(details: any) {
    const contactsCollection = collection(this.fires, 'contacts');
    addDoc(contactsCollection, details)
      .then(() => {
        console.log('Contact information added successfully');
        // alert('Contact information added successfully');
        Swal.fire({
          icon: 'success',
          title: 'Query added successfully',
          showConfirmButton: false,
          timer: 1500
        });
       
      }) .catch((error) => {
        console.error('Error adding Query : ', error);
        // alert('Error adding contact information');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error adding contact information!',
          
        });
      });
  }
  

  booking(Adddetails:any)
  {
    const bookingColllection = collection(this.fires, 'booking');
    addDoc(bookingColllection,Adddetails).then(() => {
      console.log('booking information added successfully');
      // alert('address information added successfully');
      Swal.fire({
        icon: 'success',
        title: 'Booked  successfully',
        showConfirmButton: false,
        timer: 1500
        
      });
      this.router.navigate(['/payment']);
    })
    .catch((error) => {
      console.error('Error adding Query : ', error);
      // alert('Error adding address information');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error adding booking information!',
        
      });
    });
}
}
