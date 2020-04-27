import { Injectable } from "@angular/core";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  constructor() {}
}
