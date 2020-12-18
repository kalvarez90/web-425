/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   16 December 2020
; Modified by: Karina Alvarez
; Description: app component
;===========================================
*/

//component - import
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Karina Alvarez' world!"
}
