/*
============================================
; Title:  composer-list-component.ts
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Karina Alvarez
; Description: composer lists
;===========================================
*/

import {IComposer} from './composer.interface';

//Here we find the composer class with a constructor of 5 composer objects
export class Composer {

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
  getComposers(){
    return this.composers;
  }

  //For loop looping over composer list to find composer by ID number
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
