import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sibling",
  templateUrl: "./sibling.component.html",
  styleUrls: ["./sibling.component.css"],
})
export class SiblingComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  onNewMessage() {
    this.dataService.changeMessage("Message from the sibling.....");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
