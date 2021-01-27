/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date:   26 January 2021
; Modified by: Karina Alvarez
; Description: book list page
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
