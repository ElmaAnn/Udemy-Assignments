import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { Observable } from "rxjs";
import { resolve } from "url";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["Male", "Female"];
  signupFrom: FormGroup;
  forbiddenUsernames = ["Chris", "Ben"];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupFrom = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails.bind(this)
        ),
      }),

      gender: new FormControl("Male"),
      hobbies: new FormArray([]),
    });
    //this.signupFrom.valueChanges.subscribe((value) => console.log(value));
    this.signupFrom.statusChanges.subscribe((status) => console.log(status));
    this.signupFrom.setValue({
      userData: {
        username: "Max",
        email: "max@gmail.com",
      },
      gender: "Male",
      hobbies: [],
    });
    this.signupFrom.patchValue({
      userData: {
        username: "John",
        email: "john@gmail.com",
      },
    });
  }

  onSubmit() {
    console.log(this.signupFrom);
    this.signupFrom.reset();
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupFrom.get("hobbies")).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
