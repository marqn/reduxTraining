import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {DELETE_ITEM} from "../../actions/actions";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  private items:any;

  constructor(private store:Store<void>) {
    store.select('items').subscribe(v => {
      this.items = v;
    });
  }

  private deleteItemHandler(idItem):void {
    this.store.dispatch({type: DELETE_ITEM, payload: idItem});
  }

}
