import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductListComponent } from './productlist/productlist.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LaptopsComponent } from './laptops/laptops.component';
import { HeadphonesComponent } from './headphones/headphones.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    CartComponent,
    ProductListComponent,
    MobilesComponent,
    ProductListComponent,
    LaptopsComponent,
    HeadphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
