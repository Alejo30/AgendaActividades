import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ActividadesComponent } from "./pages/actividades/actividades.component";
import { AvisosComponent } from "./pages/avisos/avisos.component";
import { MiperfilComponent } from "./pages/miperfil/miperfil.component";

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "inicio", component: InicioComponent, pathMatch: "full" },
  { path: "actividades", component: ActividadesComponent, pathMatch: "full" },
  { path: "avisos", component: AvisosComponent, pathMatch: "full" },
  { path: "miperfil", component: MiperfilComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
