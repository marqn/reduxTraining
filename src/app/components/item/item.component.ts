import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item} from "../../models/Item";
import {Store} from "@ngrx/store";
import {SELECT_ITEM} from "../../actions/actions";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  @Input() item:Item;
  @Output() delete = new EventEmitter();

  constructor(private store:Store<void>) {
  }

  selectItem() {
    this.store.dispatch({type: SELECT_ITEM, payload: this.item});
  }

}
