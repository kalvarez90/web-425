/*
============================================
; Title:  app-routing-module.ts
; Author: Professor Krasso
; Date:   26 January 2021
; Modified by: Karina Alvarez
; Description: app routing module
;===========================================
*/

//These are files being imported from external files
import { Injectable } from '@angular/core';
import { IBook } from './book-interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  //array with five book objects
  constructor() {
    this.books = [
      {
        isbn: '978-1496421975',
        title: 'The Life Giving Parent',
        description: 'The Lifegiving Parent will equip you with the tools and wisdom you need to give your children much more than just a good Christian life. You’ll give them the life of Christ.',
        numOfPages: 256,
        authors: ['Sally Clarkson']
      },
      {
        isbn: ' 978-1496420374',
        title: 'A Different Kind of Hero',
        description: 'You’ll learn how God can take your own weaknesses and turn them into strengths as he draws you outside the safety of yourself and into the glorious whirlwind of His plan for your life.',
        numOfPages: 128,
        authors: ['Sally Clarkson']
      },
      {
        isbn: '978-1400204663',
        title: 'Desperate',
        description: 'Whether you are a first time mom, or an experienced mom, Desperate will inspire you to be a part of the ultimate goal of the book, to be a part of the no-more-desperate-moms movement. ',
        numOfPages: 240,
        authors: ['Sally Clarkson']
      },
      {
        isbn: ' 978-1578565818',
        title: 'The Mission of Motherhood',
        description: 'Sally Clarkson helps you rediscover the joy and fulfillment to be found in the strategic role to which God in all his wisdom has called you, for a purpose far greater than you can ever imagine.',
        numOfPages: 256,
        authors: ['Sally Clarkson']
      },
      {
        isbn: '978-1578565825',
        title: 'The Ministry of Motherhood',
        description: 'Sally Clarkson shows how you can make a lasting difference in your child’s life by following the pattern Christ set with his own disciples–a model that will inspire and equip you to intentionally embrace the rewarding, desperately needed, and immeasurably valuable Ministry of Motherhood.',
        numOfPages: 224,
        authors: ['Sally Clarkson']
      }
    ]
  }
//observable data access points for books objects
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
//For loop looping over isbn list to find specific book
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
