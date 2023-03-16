import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpageComponent } from './Pages/bookingpage/bookingpage.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { EconomyComponent } from './Pages/economy/economy.component';
import { EconomysingleComponent } from './Pages/economysingle/economysingle.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { LuxuryComponent } from './Pages/luxury/luxury.component';
import { LuxurysingleComponent } from './Pages/luxurysingle/luxurysingle.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { ServicesComponent } from './Pages/services/services.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SuvComponent } from './Pages/suv/suv.component';
import { SuvsingleComponent } from './Pages/suvsingle/suvsingle.component';

const routes: Routes = [

  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  
  {
    path:'home',component:HomeComponent
  },

  {
    path:'contact',component:ContactComponent
  },

  {
    path:'login',component:LoginComponent
  },

  
  {
    path:'luxury',component:LuxuryComponent
  },

  
  {
    path:'Gallery',component:GalleryComponent
  },

  
  {
    path:'services',component:ServicesComponent
  },

   
  {
    path:'suv',component:SuvComponent
  },


   
  {
    path:'economy',component:EconomyComponent
  },
  
  
  {
    path:'luxurysingle',component:LuxurysingleComponent
  },
  

  {
    path:'suvsingle',component:SuvsingleComponent
  },

  
  {
    path:'economysingle',component:EconomysingleComponent
  },

  {
    path:'signup',component:SignupComponent
  },

  {
    path:'book',component:BookingpageComponent
  },

  {
    path:'payment',component:PaymentComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
