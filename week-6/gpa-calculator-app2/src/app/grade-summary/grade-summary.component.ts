/*
============================================
; Title:  grade-summary.component.ts
; Author: Professor Krasso
; Date:   4 February 2021
; Modified by: Karina Alvarez
; Description: Grade summary file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
