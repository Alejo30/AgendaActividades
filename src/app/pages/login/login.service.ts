import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LOGIN } from "./queries";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private apollo: Apollo) {}

  public async login(username: string, password: string) {
    const query = this.apollo.query({
      query: LOGIN,
      variables: { username, password }
    });
    const promise = await query.toPromise();
    return promise.data["login"];
  }
  public setUsuario(username) {
    localStorage.setItem("username", JSON.stringify(username));
  }
  public getCurrentUser() {
    const username = localStorage.getItem("username");
    return JSON.parse(username);
  }
}
