import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { HeadphonesComponent } from './headphones/headphones.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
},
{
    path: 'homepage',
    component: HomepageComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'products',
  component: ProductListComponent
},
{
  path: 'mobiles',
  component: MobilesComponent
},
{
  path: 'laptops',
  component: LaptopsComponent
},
{
  path: 'headphones',
  component: HeadphonesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
