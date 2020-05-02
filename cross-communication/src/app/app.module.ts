import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent/parent.component";
import { SiblingComponent } from "./sibling/sibling.component";
import { CousinComponent } from "./cousin/cousin.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    SiblingComponent,
    CousinComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
