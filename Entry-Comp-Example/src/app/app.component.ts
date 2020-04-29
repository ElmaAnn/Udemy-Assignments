import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { FirstEntryComponent } from "./first-entry/first-entry.component";
import { SecondEntryComponent } from "./second-entry/second-entry.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Entry-Comp-Example";
  componentRef: any;
  @ViewChild("loadComponent", { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}
  createComponent(id: number) {
    this.entry.clear();
    if (id == 1) {
      const factory = this.resolver.resolveComponentFactory(
        FirstEntryComponent
      );
      this.componentRef = this.entry.createComponent(factory);
    } else if (id == 2) {
      const factory = this.resolver.resolveComponentFactory(
        SecondEntryComponent
      );
      this.componentRef = this.entry.createComponent(factory);
    }
    this.componentRef.instance.message = "Called by App Component";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }

  data = [
    { id: 1, name: "First Entry" },
    {
      id: 2,
      name: "Second Entry",
    },
  ];
  selectName(id: number) {
    this.createComponent(id);
  }
}
