/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   8 January 2021
; Modified by: Karina Alvarez
; Description: app module
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn: true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //navigates to HomeComponent passing-in the isLoggedIn value through the query params argument
  signin(){
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
