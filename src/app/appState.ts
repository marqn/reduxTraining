import {Item} from "./models/Item";
export interface AppState
{
  items:Item[];
  selectedItem:Item;
}
