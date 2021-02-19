/*
============================================
; Title:  book-details-dialog.component.ts
; Author: Professor Krasso
; Date:   27 January 2021
; Modified by: Karina Alvarez
; Description: book detail page
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
   //mapping the data.book value to the book variable
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
