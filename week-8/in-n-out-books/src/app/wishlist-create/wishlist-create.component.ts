/*
============================================
; Title:  wishlist-create.component.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: wish list component file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  //Output statement named addItemEmitter of type EventEmitter
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  //A variable named item of type IWishlistItem
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  //Every time a user tries to add a wishlist item addItem function will be call
  addItem() {
    console.log(`Inside wishlist-create.component.ts (child) - addItem() function`);
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }
}
