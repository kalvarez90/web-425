/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   8 January 2021
; Modified by: Karina Alvarez
; Description: app routing module
;===========================================
*/

//imports from external files
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// paths added to the routes array
// each path will take you to designated component
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
