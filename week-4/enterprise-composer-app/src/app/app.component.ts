/*
============================================
; Title:  app-component.ts
; Author: Professor Krasso
; Date:   20 January 2021
; Modified by: Karina Alvarez
; Description: app component
;===========================================
*/

//These are files being imported from external files
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//assignment name embedded in the app.component.html file
export class AppComponent {
  assignment: string = 'Exercise 4.4 - Async Pipe';
}
