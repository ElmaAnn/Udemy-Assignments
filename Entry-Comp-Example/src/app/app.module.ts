import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstEntryComponent } from "./first-entry/first-entry.component";
import { SecondEntryComponent } from "./second-entry/second-entry.component";

@NgModule({
  declarations: [AppComponent, FirstEntryComponent, SecondEntryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FirstEntryComponent, SecondEntryComponent],
})
export class AppModule {}
