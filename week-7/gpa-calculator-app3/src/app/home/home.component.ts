/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: home file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // a variable named transcriptEntry of type ITranscript (from transcript.interface.ts)
  transcriptEntry: ITranscript;

  // a variable named selectableGrades of type Array<string> with different letter grading values
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+' ,'D' ,'D-', 'F'];

  //a variable name transcriptEntries of type Array<ITranscript> and set to an empty array
  transcriptEntries: Array<ITranscript>=[];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  //saveEntry() function pushing transcriptEntries to transcriptEntry
  saveEntry(){
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults(){
    let gpa: number = 0;

    //For loop checking the transcriptEntry.grade ad assigning an appropriate value
    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A': gpa += 4.0;
        break;
        case 'A-': gpa += 3.7;
        break;
        case 'B+': gpa+= 3.33;
        break;
        case 'B': gpa+= 3.00;
        break;
        case 'B-': gpa+= 2.70;
        break;
        case 'C+': gpa+= 2.30;
        break;
        case 'C': gpa+= 2.00;
        break;
        case 'C-': gpa+= 1.70;
        break;
        case 'D+': gpa+= 1.30;
        break;
        case 'D': gpa+= 1.00;
        break;
        case 'D-': gpa+= 1.30;
        break;
        case 'F': gpa+= 0.00;
        break;
      }
    }

    // dividing gpa against the transcriptEntries array length and assigning a result to the gpaTotal variable
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
