import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../shared/message/message.module';


@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,

    MessageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
