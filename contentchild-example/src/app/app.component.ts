import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "contentchild-example";
  headingStr = "This is from parent to child";
  onClick() {
    alert("Button clicked successfully..!");
  }
}
