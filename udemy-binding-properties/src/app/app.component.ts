import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "udemy-binding-properties";
  serverElements = [
    { type: "server", name: "Test Server", content: "Test Content" },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = "Changed..!";
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
