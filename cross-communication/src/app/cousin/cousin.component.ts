import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cousin",
  templateUrl: "./cousin.component.html",
  styleUrls: ["./cousin.component.css"],
})
export class CousinComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  onNewMessage() {
    this.dataService.changeMessage("Message from the cousin.....");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
