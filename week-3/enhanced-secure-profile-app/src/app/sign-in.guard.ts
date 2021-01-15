/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Karina Alvarez
; Description: app module
;===========================================
*/

//These are files being imported from external files
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //isLoggedIn variable assigned to the value being passed from sign-in.component.ts
      let isLoggedIn = next.queryParams.isLoggedIn;

      //If true, users will be able to access page
      // Users need to provide credentials in order to have access to home page
      if(isLoggedIn) {
        return true;
      }

      //If false, users will be redirected to the sign-in page
      //User cannot go directly to home page without providing credentials
      else {
        this.router.navigate(['/']);
        return false;
      }
  }

}
