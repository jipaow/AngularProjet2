import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  constructor() { }

  itemList = [];
  inputT = false;

  addItem(item) {
    if (item !== '') {
      this.itemList.push(item);
    }
  }

  deleteItem(item) {
    const index = this.itemList.indexOf(item);
    this.itemList.splice(index, 1);
  }

  editItem(item, newItem) {
    if (newItem !== '') {
    this.itemList[this.itemList.indexOf(item)] = newItem;
    }
  }

}
