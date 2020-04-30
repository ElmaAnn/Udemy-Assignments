import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  @Input() parentInput;
  @Output() informTeacher: EventEmitter<string> = new EventEmitter();
  outputString = "Hello Teacher....I am your student";

  constructor() {}

  ngOnInit() {}
  onInform() {
    this.informTeacher.emit(this.outputString);
  }
}
