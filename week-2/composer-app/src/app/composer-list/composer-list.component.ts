/*
============================================
; Title:  composer-list-component.ts
; Author: Professor Krasso
; Date:   9 January 2021
; Modified by: Karina Alvarez
; Description: composer lists
;===========================================
*/

import { Component, OnInit } from '@angular/core';

//Here we find the composer class with two fields - fullName and genre
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName:string, genre:string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  //array with five Composer objects
  constructor() {
    this.composers = [
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Richard Wagner', 'Classical'),
      new Composer('Claude Debussy', 'Classical'),
      new Composer('Frederic Chopin', 'Classical')
    ]
   }

  ngOnInit(): void {
  }

}
