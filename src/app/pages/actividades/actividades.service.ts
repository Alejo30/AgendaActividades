import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ActividadesService {
  private actividades = [
    {
      id: 1,
      titulo: "ESTE ES EL TITULO",
      descripcion: "ESTA ES LA DESCRIPCION",
      evidencia: "<h1>ESTA ES LA DESCRIPCION</h1>",
      emisor: "EJEMPLO DE EMISOR",
      remitentes: ["rem 1", "rem 2", "rem 3"]
    }
  ];

  constructor() {}

  public getActividades() {
    return this.actividades;
  }
  public addActividad(actividad) {
    this.actividades.push(actividad);
  }
  public getActividadById(id) {
    return this.actividades.filter(item => item.id === id)[0];
  }
  public editActividad(id, actividad) {
    let result = this.getActividadById(id);

    result = { ...actividad };
    return result;
  }

  public delActividad(id) {
    const index = this.actividades.indexOf(this.getActividadById(id));
    this.actividades.splice(1, index);
  }
}
