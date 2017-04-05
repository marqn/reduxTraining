import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from "../../models/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  @Input() item:Item;
  @Output() delete = new EventEmitter();
  @Output() selectItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
