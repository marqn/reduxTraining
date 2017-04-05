import {Component, OnInit} from "@angular/core";
import {Item} from "../../models/Item";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {

  selectedItem:Observable<Item>;

  nameItem:string;
  description:string;

  constructor(private store:Store<Item>) {
    this.selectedItem = store.select('items');
    this.selectedItem.subscribe(v => {
        console.log(v);
        if (v) {
          this.nameItem = v.name;
          this.description = v.description;
        }
      }
    );
  }

  ngOnInit() {
  }

  saveItem() {
    console.log('add item');
  }

  cancelItem() {
    console.log(this.selectedItem);
  }

}
