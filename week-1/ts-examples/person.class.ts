/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   17 December 2020
; Modified by: Karina Alvarez
; Description: person class implementing
; person interface
;===========================================
*/

 import  { IPerson } from "./person.interface"

 //class implementation
 class Person implements IPerson {
     firstName: string;
     lastName: string;

     constructor(firstName:string, lastName: string) {
         this.firstName = firstName;
         this.lastName = lastName;
     }
 }

 //new person object
 let myName = new Person ("Karina", "Alvarez");
 console.log(`My name is ${myName.firstName} ${myName.lastName}`);