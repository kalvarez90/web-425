/*
============================================
; Title:  app-routing-module.ts
; Author: Professor Krasso
; Date:   16 February 2021
; Modified by: Karina Alvarez
; Description: app routing module
;===========================================
*/

//These are files being imported from external files
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //new variable named isbns of type string array
  isbns: Array<string> = [
    '9781578565818',
    '9781400204663',
    '9780764235887',
    '9781496420114',
    '9781578565825',
    '9781414391281',
    '9781888692259',
    '1932012966',
    '9781935495857'
  ];


  constructor(private http: HttpClient) { }

//observable data access points for books objects
  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
