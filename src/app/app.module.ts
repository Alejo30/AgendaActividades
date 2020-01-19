import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";

import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { MessageModule } from "primeng/message";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { MenuComponent } from "./components/menu/menu.component";
import { MenubarModule } from "primeng/menubar";
import { ActividadesComponent } from "./pages/actividades/actividades.component";
import { AvisosComponent } from "./pages/avisos/avisos.component";
import { MiperfilComponent } from "./pages/miperfil/miperfil.component";
import { EditorModule } from "primeng/editor";
import { ToastModule } from "primeng/toast";
import { PanelModule } from "primeng/panel";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MultimediaComponent } from "./pages/multimedia/multimedia.component";
import { ActividadesFormComponent } from './pages/actividades/actividadesForm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MenuComponent,
    ActividadesComponent,
    AvisosComponent,
    MiperfilComponent,
    MultimediaComponent,
    ActividadesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    PanelModule,
    EditorModule,
    InputTextareaModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    MenubarModule,
    MessageModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
