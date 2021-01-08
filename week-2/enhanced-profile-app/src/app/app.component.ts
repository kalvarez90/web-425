/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   8 January 2021
; Modified by: Karina Alvarez
; Description: my details component
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//inLoggedIn variable gives access to site when set to true
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
