/*
============================================
; Title:  wishlist.component.ts
; Author: Professor Krasso
; Date:   2 February 2021
; Modified by: Karina Alvarez
; Description: wish list component file
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  //Variable named items of type Array<IWishlistItem> with an empty array
  items: Array<IWishlistItem>=[];

  constructor() { }

  ngOnInit(): void {
  }

//updateItemsHandler will take a new wish list item and push it to items array
updateItemsHandler(item: IWishlistItem) {
  this.items.push(item)
}

}
