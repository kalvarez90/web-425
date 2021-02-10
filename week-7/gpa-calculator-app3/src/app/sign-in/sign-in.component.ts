/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date:   10 February 2021
; Modified by: Karina Alvarez
; Description: sign in component file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService ) {

   }

   //creating a new Angular form
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }


  //once user click submit, value will be capture and student ID value will be hold
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    //this if statement will check if the student ID value is a valid value
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/'])
      //if not a valid student id, user will be prompted to input a valid ID
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again';
    }
  }
}
