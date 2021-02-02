/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: home file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
