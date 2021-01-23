/*
============================================
; Title:  composer-list-component.ts
; Author: Professor Krasso
; Date:   23 January 2021
; Modified by: Karina Alvarez
; Description: composer lists
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  //getComposers() will return a list of the composers
  //Using dependency injection to create a new instance of the composer service
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    //The debounceTime is used to slow down the number of times the filterComposer function is called
    //Without it each time a value is entered in the search bar the filterComposer() would be called
    //The subscribe method listens for valueChanges and calls the filterComposers()
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposer(name);
  }

}
