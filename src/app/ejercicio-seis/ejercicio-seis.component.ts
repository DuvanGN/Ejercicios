import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-ejercicio-seis',
   templateUrl: './ejercicio-seis.component.html',
   styleUrls: ['./ejercicio-seis.component.scss']
})
export class EjercicioSeisComponent {

   title = 'Ejercicio 6';
   descripcion = 'Ingrese el tamaño de la información (En Gigabytes) a copiar al CD para crear la copia de seguridad:';
   tamano: number;
   total: number;
   mensaje : string;

   onCalcular(): void {

      if (this.tamano == null ) {
         this.mensaje = 'Debe ingresar el valor de la información que desea transferir';
      }else{
         this.total = Math.ceil((this.tamano * 1024) / 700);
      }

      this.tamano = null;
   }
}