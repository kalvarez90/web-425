/*
============================================
; Title:  app-component.ts
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Karina Alvarez
; Description: app component
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//title for html file
export class AppComponent {
  assignment: string = 'Assignment 2.4 - Routing in Action';
}
