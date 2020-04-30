import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "crud-example";
  constructor() {}

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
    alert("Product added successfully...!");
    console.log(this.fieldArray, "added product details");
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    confirm("Do you want to delete the product ?");
    console.log(index, "index of product deleted");
  }
}
