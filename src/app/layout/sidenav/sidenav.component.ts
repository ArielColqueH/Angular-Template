import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  mylogo: string = "assets/images/ice-cream.png";
  constructor(private router: Router) {}

  ngOnInit() {}
  irALink(link: string) {
    this.router.navigate(["/" + link]);
  }
}
