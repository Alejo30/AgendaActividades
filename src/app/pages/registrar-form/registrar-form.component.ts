import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RegistrarService } from "./registrar.service";

@Component({
  selector: "app-registrar-form",
  templateUrl: "./registrar-form.component.html"
})
export class RegistrarFormComponent implements OnInit {
  public registrar = {
    username: "",
    password: "",
    extra: {
      representado: "",
      nombres: "",
      apellidos: ""
    }
  };

  public action = "";

  constructor(
    private route: ActivatedRoute,
    private srv: RegistrarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.action = this.route.snapshot.params["action"];
    console.log("ESTA ES LA ACCION: ", this.action);
  }

  nueva() {
    this.srv.addRegistro(this.registrar).then(response => {
      this.router.navigate(["/login", "success"]);
    });
  }

  editar() {}

  eliminar() {}
}
