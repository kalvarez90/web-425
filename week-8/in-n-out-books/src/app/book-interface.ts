/*
============================================
; Title:  book-interface.ts
; Author: Professor Krasso
; Date:   26 January 2021
; Modified by: Karina Alvarez
; Description: book information
;===========================================
*/

//exporting files containing book information
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
