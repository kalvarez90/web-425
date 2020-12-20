/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   18 December 2020
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
export class AppComponent {
  assignment: string = "Assignment 1.5 - Components";
}
