import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"],
})
export class TeacherComponent implements OnInit {
  inputVariable = "From the teacher component";

  constructor() {}

  ngOnInit() {}
  getTeacherMsg(value) {
    console.log(value);
  }
}
