import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "actividades-form",
  templateUrl: "./actividadesForm.component.html"
})
export class ActividadesFormComponent implements OnInit {
  public actividad = {
    titulo: "",
    descripcion: "",
    evidencia: ""
  };

  public action = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.action = this.route.snapshot.params["action"];
    console.log("ESTA ES LA ACCION: ", this.action);
  }

  nueva() {
    console.log("ACTIVIDAD: ", this.actividad);
  }

  editar() {}

  eliminar() {}
}
