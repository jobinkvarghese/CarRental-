import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { ServicesComponent } from './Pages/services/services.component';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './Units/navbar/navbar.component';
import { FooterComponent } from './Units/footer/footer.component';
import { LuxuryComponent } from './Pages/luxury/luxury.component';
import { SuvComponent } from './Pages/suv/suv.component';
import { EconomyComponent } from './Pages/economy/economy.component';
import { LuxurysingleComponent } from './Pages/luxurysingle/luxurysingle.component';
import { SuvsingleComponent } from './Pages/suvsingle/suvsingle.component';
import { EconomysingleComponent } from './Pages/economysingle/economysingle.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { BookingpageComponent } from './Pages/bookingpage/bookingpage.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    ServicesComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    LuxuryComponent,
    SuvComponent,
    EconomyComponent,
    LuxurysingleComponent,
    SuvsingleComponent,
    EconomysingleComponent,
    SignupComponent,
    BookingpageComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
