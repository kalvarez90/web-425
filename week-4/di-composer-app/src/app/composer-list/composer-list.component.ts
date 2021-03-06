/*
============================================
; Title:  composer-list-component.ts
; Author: Professor Krasso
; Date:   20 January 2021
; Modified by: Karina Alvarez
; Description: composer lists
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  //getComposers() will return a list of the composers
  //Using dependency injection to create a new instance of the composer service
  constructor(private ComposerService: ComposerService) {
    this.composers = this.ComposerService.getComposers();
   }

  ngOnInit(): void {
  }

}
