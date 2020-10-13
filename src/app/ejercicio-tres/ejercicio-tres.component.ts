import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-tres',
  templateUrl: './ejercicio-tres.component.html',
  styleUrls: ['./ejercicio-tres.component.scss']
})
export class EjercicioTresComponent{
   title = 'Ejercicio 3';
   descripcion = 'Ingrese el número de respuestas correctas, incorrectas y en blanco para obtener la calificación total del postulado:';
   preCorrec:  number;
   preIncorr:  number;
   preBlanco:  number;
   total:      number;
   respuestas: number;

  onCalcular(): void {
      this.preCorrec= this.preCorrec || 0;
      this.preIncorr= this.preIncorr || 0;
      this.preBlanco= this.preBlanco || 0;

      this.respuestas= this.preCorrec + this.preIncorr + this.preBlanco ;
      this.total = (this.preCorrec * 4) + (this.preIncorr * -1);
      
      //this.total = Math.round((this.preCorrec * 4) + (this.preIncorr * -1));
      //this.total = Number (this.total.toFixed(2));
   }
}