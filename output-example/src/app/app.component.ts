import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "output-example";
  showMessage: string;

  onNotifyClicked(message: string) {
    this.showMessage = message;
    console.log(event, "from app component");
  }
}
