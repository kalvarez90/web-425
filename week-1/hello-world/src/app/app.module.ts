/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   16 December 2020
; Modified by: Karina Alvarez
; Description:
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
