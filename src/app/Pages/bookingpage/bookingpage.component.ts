import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent {


  constructor(private fs:FireService)
  {

  }

name:any=''
email:any=''
number:any=''
date1:any=''
date2:any=''
address:any=''


  submitForm() {
    
    if (this.name === '') {
      alert('Please enter Name')
    }
    else if (this.email === '') {
      alert('Please enter Email')
    }
    
    else if (this.number === '') {
      alert('Please enter Phone No')
    }
    else if (this.date1 === '') {
      alert('Please enter the Date WHEN DO YOU NEED A CAR ?')
    }
    else if (this.date2 === '') {
      alert('Please enter the Date TILL WHEN DO YOU NEED IT ?')
    }
    else if (this.address === '') {
      alert('Please enter Address')
    }
    else {
      const Adddetails = {
        name: this.name,
        email: this.email,
        phone: this.number,
        date1: this.date1,
        date2: this.date2,
        address: this.address,
        
      };
      this.fs.booking(Adddetails);
      this.name = '';
      this.email = '';
      this.number = '';
      this.date1 = '';
      this.date2 = '';
      this.address = '';
     
    }
  }
}
