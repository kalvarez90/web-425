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
import { BooksService } from '../books.service';
import { IBook } from '../book-interface';
import { Observable } from 'rxjs';
import {MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  // an array of string for the header of the table in book-list.component.html
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  //With this constructor will be able to access the book service
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  //ShowBookDetails will take an isbn of type string
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    //calling the afterClosed() and setting book variable to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null
      }
    });
  }
}
