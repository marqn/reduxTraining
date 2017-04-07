import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {AppStore} from "../../models/appstore.model";
import {ADD_ITEM, UPDATE_ITEM} from "../../actions/actions";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {

  public items:Observable<any>;
  public selectedItem:Observable<Item>;

  private id:number = 0;
  private idItem:number;
  private nameItem:string = '';
  private description:string = '';

  constructor(private store:Store<AppStore>) {
    this.items = store.select('items');

    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => {
      console.log(v);
      if(v) {
        this.idItem = v.id;
        this.nameItem = v.name;
        this.description = v.description;
      }
    });
  }

  saveItem() {
    if (!this.isEmptyForm()) {

      let actionType = UPDATE_ITEM;
      if(!this.idItem)
      {
        //update
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

  clearItem() {
    this.clearForm();
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
