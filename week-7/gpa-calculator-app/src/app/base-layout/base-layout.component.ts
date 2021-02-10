/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date:   10 February 2021
; Modified by: Karina Alvarez
; Description: base layout file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

// assignment name that will be embedded in the base-layout.component.html file
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator"
   }

  ngOnInit(): void {
  }

  //Once user logs into the system, the signOut() function will allow them to sign out of the site
  // user will be redirected to the sign-in page
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
