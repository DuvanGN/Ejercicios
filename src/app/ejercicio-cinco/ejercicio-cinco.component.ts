import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';

@Component({
  selector: 'app-ejercicio-cinco',
  templateUrl: './ejercicio-cinco.component.html',
  styleUrls: ['./ejercicio-cinco.component.scss']
})
export class EjercicioCincoComponent {
  title = 'Ejercicio 5';
  descripcion = 'Ingrese el número de unidades logradas diarias a lo largo de la semana:';
  Lunes : number ;
  Martes : number ;
  Miercoles : number ;
  Jueves : number  ;
  Viernes : number ;
  Sabado : number ;
  total = 0 ;
  respuestas = 'No';

 onCalcular(): void {
    this.Lunes = this.Lunes || 0 ;
    this.Martes = this.Martes || 0 ;
    this.Miercoles =  this.Miercoles || 0 ;
    this.Jueves =  this.Jueves || 0  ;
    this.Viernes =  this.Viernes || 0 ;
    this.Sabado =  this.Sabado || 0 ;  
    this.total = this.Lunes + this.Martes + this.Miercoles + this.Jueves + this.Viernes + this.Sabado;

     if (this.total > 100) {
      this.respuestas = 'Si';
     }

  }
}
