import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SubjectService {
  private broadCastMsg = new BehaviorSubject<string>(
    "The message to be broadcasted"
  );
  broadcast = this.broadCastMsg.asObservable();

  constructor() {}

  updateBroadcastMsg(newMessage: string) {
    this.broadCastMsg.next(newMessage);
  }
}
