import {Component} from "@angular/core";
import {AppStore} from "../../models/appstore.model";
import {Store} from "@ngrx/store";
import {DELETE_ITEM} from "../../actions/actions";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  public items;

  constructor(private store:Store<AppStore>) {
    store.select('items').subscribe(v => {
      this.items = v;
    });
  }

  deleteItemHandler(idItem):void {
    this.store.dispatch({type: DELETE_ITEM, payload: idItem});
  }

}
