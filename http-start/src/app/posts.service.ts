import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Posts } from "./post.model";

import { map, catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}
  error = new Subject();

  createAndStorePosts(title: string, content: string) {
    const postData: Posts = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        "https://elma-udemy-project.firebaseio.com//posts.json",
        //https://ng-complete-guide-c56d3.firebaseio.com
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }
  fetchPosts() {
    return this.http
      .get<{ [key: string]: Posts }>(
        "https://elma-udemy-project.firebaseio.com//posts.json"
      )
      .pipe(
        map((responseData) => {
          const postsArray: Posts[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorResponse) => {
          return throwError(errorResponse);
        })
      );
  }
  deletePosts() {
    return this.http.delete(
      "https://elma-udemy-project.firebaseio.com//posts.json"
    );
  }
}
