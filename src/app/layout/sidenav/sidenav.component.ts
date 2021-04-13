import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  isotipo: string = "assets/images/isotipo.svg";
  logotipo: string = "assets/images/logotipo.svg";
  constructor(private router: Router) {}

  ngOnInit() {}
  irALink(link: string) {
    this.router.navigate(["/" + link]);
  }
}
