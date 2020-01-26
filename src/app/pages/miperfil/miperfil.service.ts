import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GET_USUARIO } from "./queries";

@Injectable({
  providedIn: "root"
})
export class MiPerfilService {
  private perfil = [
    {
      usuario: "",
      representado: "Luis Aguaysa",
      enviados: "10",
      recibidos: "10"
    }
  ];

  constructor(private apollo: Apollo) {}

  public getRegistro() {
    return this.perfil;
  }
  public addRegistro(perfil) {
    this.perfil.push(perfil);
    console.log("Se creo " + perfil);
  }

  public async getUsuario(username) {
    console.log("USERNAME: ", username);
    const query = this.apollo.query({
      query: GET_USUARIO,
      variables: {
        username
      }
    });
    const promise = await query.toPromise();
    const data = promise.data["usuario"];
    data["extra"] = JSON.parse(data["extra"]);

    return data;
  }
}
