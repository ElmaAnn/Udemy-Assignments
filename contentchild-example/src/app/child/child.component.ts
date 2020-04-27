import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { DateViewerComponent } from "../date-viewer/date-viewer.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit, AfterContentInit {
  @ContentChild("headingContent", { static: false }) headerElementRef;
  @ContentChildren(DateViewerComponent)
  dateViewerComponent: QueryList<DateViewerComponent>;
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    console.log(this.headerElementRef);
    console.log(this.dateViewerComponent);
  }
}
