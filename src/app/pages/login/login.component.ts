import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public usuario = {
    username: "",
    password: ""
  };

  public status = null;

  public statusLogin = null;

  constructor(
    private route: ActivatedRoute,
    private srv: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.status = this.route.snapshot.params["status"];
  }

  login() {
    this.srv.login(this.usuario.username, this.usuario.password).then(res => {
      if (res === null) {
        this.statusLogin = "N";
        console.log("NO SE HA ENCONTRADO ESE USUARIO");
      } else {
        this.srv.setUsuario(this.usuario.username);
        this.router.navigate(["inicio"]);
      }
    });
  }

  salir() {}
}
