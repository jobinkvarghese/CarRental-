import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {



  info: any = '';
  email: any = '';
  name: any = '';
  phone:any='';

  constructor(private fs: FireService) {}

  
  
    // this.validation()
    
  contactus()
  {
    if(this.name==='')
    {
      alert('Please enter username');
    }
    else if(this.email==='')
    {
      alert('Please enter email')
    }

    else if(this.phone==='')
    {
      alert('Please enter Phone Number')
    }
    else if(this.info==='')
    {
      alert('Please enter your concern')
    }
    else{

      const details = {
        info: this.info,
        email: this.email,
        name: this.name,
        phone:this.phone,
      };
     
      this.fs.contactus1(details);
      this.info=''
      this.email=''
      this.name=''
      this.phone=''
    }
    }
  
  }

