import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-cuatro',
  templateUrl: './ejercicio-cuatro.component.html',
  styleUrls: ['./ejercicio-cuatro.component.scss']
})
export class EjercicioCuatroComponent{

  title = 'Ejercicio 4';
  descripcion = 'Ingrese el número de partidos ganados, perdidos y empatados, por el equipo en el torneo apertura:';
  ganados:   number;
  perdidos:  number;
  empatados: number;
  total:     number;
  respuestas:number;

 onCalcular(): void {
     this.ganados   = this.ganados || 0;
     this.perdidos  = this.perdidos || 0;
     this.empatados = this.empatados || 0;

     this.respuestas= this.ganados + this.perdidos + this.empatados ;
     this.total = (this.ganados * 3) + (this.empatados * 1);

     this.ganados   = null;
     this.perdidos  = null;
     this.empatados = null;
  }

}
