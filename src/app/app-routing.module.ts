import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }      from './sign-in/sign-in.component';
import { SignUpComponent }      from './sign-up/sign-up.component';
import { HomeComponent }        from './home/home.component';
import { AccountComponent }     from './account/account.component';
import { CouponComponent }      from './coupon/coupon.component';
import { FoodComponent }        from './food/food.component';
import { EmployeecornerComponent }  from './employeecorner/employeecorner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },  
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'coupon', component: CouponComponent },
  { path: 'food', component: FoodComponent },
  { path: 'employeecorner', component: EmployeecornerComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
