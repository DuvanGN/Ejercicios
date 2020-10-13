import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-siete',
  templateUrl: './ejercicio-siete.component.html',
  styleUrls: ['./ejercicio-siete.component.scss']
})
export class EjercicioSieteComponent {
  title = 'Ejercicio 7';
  descripcion = 'Ingrese seis(6) números entre positivos negativos y neutros:';
  positivos =  0;
  negativos =  0;
  neutros   =  0;
  total =  0;
  numero1:    number;
  numero2:    number;
  numero3:    number;
  numero4:    number;
  numero5:    number;
  numero6:    number;
  mensaje : string;
  objeto = [];

  onCalcular(): void {
    this.positivos = 0;
    this.negativos = 0;
    this.neutros = 0;
    this.total = 0;
    this.objeto = [this.numero1, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6];

    for (const property in this.objeto) {

      if (this.objeto[property] > 0) {
        this.positivos = this.positivos + 1;        
      } else if (this.objeto[property] < 0) {
        this.negativos = this.negativos + 1;
      } else {
        this.objeto[property] = 0;
        this.neutros = this.neutros + 1;
      }
      this.total = this.total + Number(this.objeto[property]);
    }

  }
}
