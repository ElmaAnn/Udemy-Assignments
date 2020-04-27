import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "data-binding-basics";
  bindString_1 = "String Interpolation Method";
  bindString_2: string = "Property Binding";
  bindString_3 = "NgModel Binding";
}
