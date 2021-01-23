/*
============================================
; Title:  composer-list-component.ts
; Author: Professor Krasso
; Date:   23 January 2021
; Modified by: Karina Alvarez
; Description: composer lists
;===========================================
*/

//These are files being imported from external files
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: 'Ludwig van Beethoven', genre: 'Classical'},
      {composerId: 101, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical'},
      {composerId: 102, fullName: 'Richard Wagner', genre: 'Classical'},
      {composerId: 103, fullName: 'Claude Debussy', genre: 'Classical'},
      {composerId: 104, fullName: 'Frederic Chopin', genre: 'Classical'}
    ]
  }

  //data access points for composer objects created in constructor
  //The observable IComposer has been added
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  //For loop looping over composer list to find composer by ID number
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  //pipe operator is the built-in function that will allow us to chain functions together
  //map() function is used when we want to return a new array of objects
  filterComposer(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1))
    )
  }
}
