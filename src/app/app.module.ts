import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const appRoute : Routes = [
{
    path : 'login',
    component: LoginComponent
},
{
    path : 'signup',
    component: SignupComponent
},
{
    path : 'home',
    component: HomeComponent
},
{
  path : '**',
  component: NotfoundComponent
},
];

@NgModule({
  imports: [BrowserModule, FormsModule, FormsModule, RouterModule.forRoot(appRoute), ReactiveFormsModule],
  declarations: [AppComponent, ToggleComponent, SignupComponent, NotfoundComponent, HomeComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}