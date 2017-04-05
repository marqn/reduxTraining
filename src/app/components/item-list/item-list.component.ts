import {Component, OnInit} from "@angular/core";
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  items:Array<Item>;

  constructor(private itemService:ItemService) {
    this.items = itemService.getItems();
  }

  deleteItemHandler(idItem):void {
    this.items = this.items.filter(function(e:Item) {return e.id !== idItem})
  }

  
  ngOnInit() {
  }

}
