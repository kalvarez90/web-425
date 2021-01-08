/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Karina Alvarez
; Description: app routing module
;===========================================
*/

//Import from external files
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

// paths added to the routes array
// each path will take you to designated component
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component:ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
