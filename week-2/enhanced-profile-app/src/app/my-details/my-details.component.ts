/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   8 January 2021
; Modified by: Karina Alvarez
; Description: app component
;===========================================
*/

import { Component, OnInit } from '@angular/core';

//TypeScript Person class with different variables
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'
  ];

  constructor (fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  //toString method that will output the content of the class
  toString() {
    console.log(`\n Full Name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color:  ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  //variable myProfile will be a person datatype
  myProfile: Person;

  constructor() {
    this.myProfile = new Person ("Karina Alvarez", "Chilean Empanadas", "Purple");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
