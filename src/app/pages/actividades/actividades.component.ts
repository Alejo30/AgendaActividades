import { Component, OnInit } from "@angular/core";
import { ActividadesService } from "./actividades.service";

@Component({
  selector: "app-actividades",
  templateUrl: "./actividades.component.html"
})
export class ActividadesComponent implements OnInit {
  public actividades = [];
  constructor() {}

  ngOnInit() {
    //this.actividades = this.srv.getActividades();
  }
}
