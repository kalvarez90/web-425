/*
============================================
; Title:  sig-in.guard.ts
; Author: Professor Krasso
; Date:   10 February 2021
; Modified by: Karina Alvarez
; Description: sign in guard file
;===========================================
*/

//These are files being imported from external files
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    //if user has access it will be able to log in
    //if user does not have access it will be redirected to sign-in page
    if(sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }

}
