import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../subject.service";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
})
export class SecondComponent implements OnInit {
  broadCastMessage: any;

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.broadcast.subscribe((broadCastMessage) => {
      this.broadCastMessage = broadCastMessage;
    });
  }
  onBroadcastNewMsg(newBroadCastMsg: HTMLInputElement) {
    this.subjectService.updateBroadcastMsg(newBroadCastMsg.value);
    newBroadCastMsg.value = "";
  }
}
