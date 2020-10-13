import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-ejercicio-dos',
   templateUrl: './ejercicio-dos.component.html',
   styleUrls: ['./ejercicio-dos.component.scss']
})
export class EjercicioDosComponent {
   title = 'Ejercicio 2';
   descripcion = 'Ingrese un numero y realize la operacion segun al función que se requiera:';
   operandoA: number;
   resultado: number;
   operacion: string;
   mensaje: string;

   onSumar(): void {
      if (this.operandoA == null) {
         this.mensaje = 'Ingrese el valor para poder continuar';
      } else if (this.operacion == null) {
         this.mensaje = 'Seleccione la operación a realizar';
      } else {
         switch (this.operacion) {
            case "1": {
               this.resultado = Math.abs(this.operandoA);
               break;
            }
            case "2": {
               this.resultado = Math.acos(this.operandoA);
               break;
            }
            case "3": {
               this.resultado = Math.acosh(this.operandoA);
               break;
            }
            case "4": {
               this.resultado = Math.asin(this.operandoA);
               break;
            }
            case "5": {
               this.resultado = Math.asinh(this.operandoA);
               break;
            }
            case "6": {
               this.resultado = Math.atan(this.operandoA);
               break;
            }
            case "7": {
               this.resultado = Math.atanh(this.operandoA);
               break;
            }
            case "8": {
               this.resultado = Math.cos(this.operandoA);
               break;
            }
            case "9": {
               this.resultado = Math.cbrt(this.operandoA);
               break;
            }
            case "10": {
               this.resultado = Math.log10(this.operandoA);
               break;
            }

         }
         this.resultado = Number(this.resultado.toFixed(2));
      }
   }
}
