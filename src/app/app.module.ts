import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {StoreModule} from "@ngrx/store";
import {items, selectedItem} from "./items";
import {AppComponent} from "./app.component";
import {ItemsService} from "./services/items.service.ts";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(items, selectedItem)
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
