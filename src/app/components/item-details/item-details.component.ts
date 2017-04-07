import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {ADD_ITEM, UPDATE_ITEM} from "../../actions/actions";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {

  private items:Observable<any>;
  private selectedItemStore:Observable<Item>;
  private id:number = 0;
  private idItem:number;
  private nameItem:string = '';
  private description:string = '';

  constructor(private store:Store<void>) {
    this.items = store.select('items');
    this.items.subscribe(v => {
      this.clearForm();
    });

    this.selectedItemStore = store.select('selectedItem');
    this.selectedItemStore.subscribe(v => {
      if (v) {
        this.idItem = v.id;
        this.nameItem = v.name;
        this.description = v.description;
      }
    });
  }

  private saveItem() {
    if (!this.isEmptyForm()) {

      let actionType = UPDATE_ITEM;
      if (!this.idItem) {
        // Update item...
        actionType = ADD_ITEM;
        this.idItem = this.nextId();
      }

      this.store.dispatch({
        type: actionType,
        payload: {id: this.idItem, name: this.nameItem, description: this.description}
      });
      this.clearForm();
    }
  }

  private clearForm():void {
    this.idItem = null;
    this.nameItem = '';
    this.description = '';
  }

  private isEmptyForm():boolean {
    if (this.nameItem != '' && this.description != '')
      return false;
    else
      return true;
  }

  private nextId():number {
    return ++this.id;
  }


}
