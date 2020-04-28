import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "viewchild-example";
  @ViewChild("fnameInput", { static: false }) fnameInputRef: ElementRef;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "border",
    //   "2px dashed red"
    // );
  }
  ngAfterViewInit() {
    this.fnameInputRef.nativeElement.focus();

    this.renderer.setStyle(
      this.elRef.nativeElement,
      "border",
      "1px dashed red"
    );
  }
}
