import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {AppStore} from "../../models/appstore.model";
import {ADD_ITEM} from "../../actions/actions";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {

  public items:Observable<any>;

  private id:number = 0;
  private nameItem:string = '';
  private description:string = '';

  constructor(private store:Store<AppStore>) {
    this.items = store.select('items');
  }

  saveItem() {
    if(!this.isEmptyForm()) {
      this.store.dispatch({type: ADD_ITEM, payload: {id: this.nextId(), name: this.nameItem, description: this.description}});
      this.clearForm();
    }
  }

  clearItem() {
    this.clearForm();
  }

  private clearForm():void {
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
