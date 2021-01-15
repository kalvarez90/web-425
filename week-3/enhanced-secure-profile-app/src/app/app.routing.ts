/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Karina Alvarez
; Description: app module
;===========================================
*/

//These are files being imported from external files
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard'

// These are the paths added to the routes array
// Each of these path will take you to designated component
//SignInGuard will protect the access from unauthorized user
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
