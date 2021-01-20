/*
============================================
; Title:  content-component.ts
; Author: Professor Krasso
; Date:   20 January 2021
; Modified by: Karina Alvarez
; Description: contact component
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
