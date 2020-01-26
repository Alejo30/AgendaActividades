import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login/login.service";
import { MiPerfilService } from "./miperfil.service";

@Component({
  selector: "app-miperfil",
  templateUrl: "./miperfil.component.html"
})
export class MiperfilComponent implements OnInit {
  public perfil = {
    usuario: "",
    representado: "",
    enviados: "",
    recibidos: ""
  };

  public action = "";

  constructor(private loginSrv: LoginService, private srv: MiPerfilService) {}

  ngOnInit() {
    const username = this.loginSrv.getCurrentUser();
    console.log(username);
    this.srv.getUsuario(username).then(res => {
      console.log("USUARIO: ", res);
      this.perfil = res;
    });
  }

  editar() {}

  eliminar() {}
}
