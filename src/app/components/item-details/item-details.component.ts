import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveItem() {
    console.log('add item');
  }

  cancelItem() {
    console.log('cancel');
  }

}
