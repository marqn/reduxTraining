import {Item} from "./models/item.model";
export interface AppStore {
  items:Item[];
  selectedItem: Item;
}
