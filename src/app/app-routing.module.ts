import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ActividadesComponent } from "./pages/actividades/actividades.component";
import { AvisosComponent } from "./pages/avisos/avisos.component";
import { MiperfilComponent } from "./pages/miperfil/miperfil.component";
import { ActividadesFormComponent } from "./pages/actividades/actividadesForm.component";
import { RegistrarFormComponent } from "./pages/registrar-form/registrar-form.component";

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login/:status", component: LoginComponent, pathMatch: "full" },
  { path: "inicio", component: InicioComponent, pathMatch: "full" },
  { path: "actividades", component: ActividadesComponent, pathMatch: "full" },
  { path: "registrar", component: RegistrarFormComponent, pathMatch: "full" },
  {
    //SIRVE PARA EDITAR Y ELIMINAR
    path: "actividades/:action/:id?",
    component: ActividadesFormComponent,
    pathMatch: "full"
  },
  {
    //SIRVE SOLO PARA CREAR
    path: "actividades/:action",
    component: ActividadesFormComponent,
    pathMatch: "full"
  },
  { path: "avisos", component: AvisosComponent, pathMatch: "full" },
  { path: "miperfil", component: MiperfilComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
