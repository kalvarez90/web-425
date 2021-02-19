/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date:   16 February 2021
; Modified by: Karina Alvarez
; Description: book list page
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  //Subscribing to getBooks() and looping over the response data object
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          //In order to access the field values of the object we need to reference them by dot notation
          //this is the format being returned from the API
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void { }

  //using JavaScript built-in find function to search the books array and return the matching book object
   showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);

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
