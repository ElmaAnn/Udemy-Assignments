import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../subject.service";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent implements OnInit {
  broadCastMessage: string;

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
