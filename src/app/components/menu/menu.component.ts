import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: "Actividades",
        items: [
          {
            label: "Nueva Actividad",
            icon: "pi pi-fw pi-plus"
          },
          {
            label: "Editar Actividad",
            icon: "pi pi-fw pi-pencil"
          },
          {
            label: "Lista de Actividades",
            icon: "pi pi-fw pi-bars"
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
            label: "Editar Aviso",
            icon: "pi pi-fw pi-pencil"
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
        label: "Mi Perfil"
      }
    ];
  }
}
