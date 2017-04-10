import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {StoreModule} from "@ngrx/store";
import {AppComponent} from "./app.component";
import {ItemComponent} from "./components/item/item.component";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";
import {items} from "./stores/items.store";
import {selectedItem} from "./stores/selectedItem.store";
import {ItemService} from "./services/item.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({items, selectedItem}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
