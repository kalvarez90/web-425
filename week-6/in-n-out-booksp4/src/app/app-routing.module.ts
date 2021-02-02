/*
============================================
; Title:  app-routing-module.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: app routing module
;===========================================
*/

//These are files being imported from external files
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// These are the paths added to the routes array
// Each of these path will take you to designated component
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
