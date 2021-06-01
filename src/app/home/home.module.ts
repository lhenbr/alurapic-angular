import { SingUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SingUpComponent } from './signup/singup.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent,
    SingUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
  providers: [SingUpService]
})
export class HomeModule { }
