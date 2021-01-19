/*
============================================
; Title:  composer-list-component.ts
; Author: Professor Krasso
; Date:   14 January 2021
; Modified by: Karina Alvarez
; Description: composer lists
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  //activated route to build access the value inside path of composerId
  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'),10);

    //This will check if composerId has value,
    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
