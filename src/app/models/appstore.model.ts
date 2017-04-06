import {Item} from "./Item";
export interface AppStore
{
  items:Item[];
  selectedItem:Item;
}
