/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   8 January 2021
; Modified by: Karina Alvarez
; Description: app component
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
