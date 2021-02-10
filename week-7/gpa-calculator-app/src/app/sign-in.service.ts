/*
============================================
; Title:  sign-in.service.ts
; Author: Professor Krasso
; Date:   10 February 2021
; Modified by: Karina Alvarez
; Description: sign in service file
;===========================================
*/

//These are files being imported from external files
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  //variable named studentIds of type Array<number>
  studentIds: Array<number>;

  //student ids that will work in the sign-in form
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   //iterating over the studentIds array and returning true if a match is found.
   validate(studentId: number) {
     //.some will return a true or false value
    return this.studentIds.some(id => id === studentId)
  }
}

