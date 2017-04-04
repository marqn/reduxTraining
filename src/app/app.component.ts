import { Component } from '@angular/core';
import {Item} from "./models/Item";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items:Observable<Array<Item>>;
  selectedItem:Item;
}
