import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-ejercicio-uno',
   templateUrl: './ejercicio-uno.component.html',
   styleUrls: ['./ejercicio-uno.component.scss']
})
export class EjercicioUnoComponent {
   title = 'Ejercicio 1';
   descripcion = 'Ingrese los dos valores y seleccione la operación matemática a realizar:';
   operandoA: number;
   operandoB: number;
   resultado: number;
   operacion: string;
   mensaje:   string;

   onSumar(): void {
      if (this.operandoA == null || this.operandoB== null) {
         this.mensaje = 'Ingrese los dos valores para poder continuar';
      } else if ( this.operacion == null) {
         this.mensaje = 'Seleccione la operación a realizar';
      }else{
         switch (this.operacion) {
            case "sumar": {
               this.resultado = this.operandoA + this.operandoB;
               break;
            }
            case "restar": {
               this.resultado = this.operandoA - this.operandoB;
               break;
            }
            case "multiplicar": {
               this.resultado = this.operandoA * this.operandoB;
               break;
            }
            case "dividir": {
               if (this.operandoA===0 || this.operandoB===0) {
                  this.mensaje = 'No se puede realizar una división por 0';
               }else {
                  this.resultado = this.operandoA / this.operandoB;
               }
               break;
            }
         }
         this.resultado = Number (this.resultado.toFixed(2));
      }
   }
}
