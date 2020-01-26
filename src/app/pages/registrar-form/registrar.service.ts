import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { ADD_USUARIO } from "./queries";
@Injectable({
  providedIn: "root"
})
export class RegistrarService {
  private registrar = [
    {
      nombres: "",
      apellidos: "ESTE ES EL TITULO",
      username: "ESTA ES LA DESCRIPCION",
      password: "<h1>ESTA ES LA DESCRIPCION</h1>",
      representado: "EJEMPLO DE EMISOR"
    }
  ];

  constructor(private apollo: Apollo) {}

  public getRegistro() {
    return this.registrar;
  }
  public async addRegistro(registrar) {
    this.registrar.push(registrar);
    registrar.extra = JSON.stringify(registrar.extra);
    console.log("Se registro a: " + registrar);

    const query = this.apollo.mutate({
      mutation: ADD_USUARIO,
      variables: {
        params: registrar
      }
    });

    const response = await query.toPromise();

    console.log(response);
  }
}
