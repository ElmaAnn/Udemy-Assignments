import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  QueryList,
  ContentChildren,
} from "@angular/core";
import { DateViewerComponent } from "../date-viewer/date-viewer.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit, AfterContentInit {
  @ContentChildren(DateViewerComponent) dateviewerComponent: QueryList<
    DateViewerComponent
  >;

  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.dateviewerComponent;
    console.log(this.dateviewerComponent);
  }
}
