/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: base layout file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

// assignment name that will be embedded in the base-layout.component.html file
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.4 - Input Properties"
   }

  ngOnInit(): void {
  }

}
