import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DateViewerComponent } from './date-viewer/date-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DateViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
