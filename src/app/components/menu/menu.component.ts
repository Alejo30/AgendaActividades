import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: "Actividades",
        items: [
          {
            label: "Nueva Actividad",
            icon: "pi pi-fw pi-plus",
            command: () => this.router.navigate(["/actividades/add"])
          },
          {
            label: "Lista de Actividades",
            icon: "pi pi-fw pi-bars",
            command: () => this.router.navigate(["/actividades"])
          }
        ]
      },
      {
        label: "Avisos",
        items: [
          {
            label: "Nuevo Aviso",
            icon: "pi pi-fw pi-plus"
          },
          {
            label: "Lista de Avisos",
            icon: "pi pi-fw pi-bars"
          }
        ]
      },
      {
        label: "Videos"
      },
      {
        label: "Mi Perfil",
        command: () => this.router.navigate(["miperfil"])
      }
    ];
  }
}
