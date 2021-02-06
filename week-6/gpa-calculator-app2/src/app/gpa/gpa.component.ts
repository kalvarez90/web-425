/*
============================================
; Title:  gpa.component.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: gpa component file
;===========================================
*/

//These are files being imported from external files
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
