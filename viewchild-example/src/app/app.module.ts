import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { CounterParentComponent } from "./counter-parent/counter-parent.component";

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterParentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
