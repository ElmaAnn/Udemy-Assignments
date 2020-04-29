import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first-entry",
  templateUrl: "./first-entry.component.html",
  styleUrls: ["./first-entry.component.css"],
})
export class FirstEntryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  hidediv: boolean = true;

  onClose() {
    this.hidediv = false;
  }
}
