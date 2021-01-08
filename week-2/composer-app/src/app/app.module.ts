/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Karina Alvarez
; Description: app module
;===========================================
*/

//external files import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ComposerListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
