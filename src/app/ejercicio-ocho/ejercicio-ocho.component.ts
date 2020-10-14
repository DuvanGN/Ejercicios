import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-ocho',
  templateUrl: './ejercicio-ocho.component.html',
  styleUrls: ['./ejercicio-ocho.component.scss']
})
export class EjercicioOchoComponent {
  title = 'Ejercicio 8';
  descripcion = 'Ingrese 10 personas segun su edad y su peso para obtener el promedio de cada grupo publacional:';
  ninos = 0;
  jovenes = 0;
  adultos = 0;
  viejos = 0;
  promeninos = 0;
  promejovenes = 0;
  promeadultos = 0;
  promeviejos = 0;
  edad1: number;
  edad2: number;
  edad3: number;
  edad4: number;
  edad5: number;
  edad6: number;
  edad7: number;
  edad8: number;
  edad9: number;
  edad10: number;
  peso1: number;
  peso2: number;
  peso3: number;
  peso4: number;
  peso5: number;
  peso6: number;
  peso7: number;
  peso8: number;
  peso9: number;
  peso10: number;
  mensaje: string;
  edades = [];
  pesos = [];
  object = {}


  onCalcular(): void {
    this.ninos = 0;
    this.jovenes = 0;
    this.adultos = 0;
    this.viejos = 0;
    this.edades = [this.edad1, this.edad2, this.edad3, this.edad4, this.edad5, this.edad6, this.edad7, this.edad8, this.edad9, this.edad10];
    //this.edades = [[this.edad1, this.peso1]], [this.edad2,this.peso2], [this.edad3], [this.edad4], [this.edad5], [this.edad6], [this.edad7], [this.edad8], [this.edad9], [this.edad10];
    //this.pesos = [this.peso1], , this.peso3, this.peso4, this.peso5, this.peso6, this.peso7, this.peso8, this.peso9, this.peso10];
    //const object = {edad1: this.peso1, edad2: this.peso2, edad3: this.peso3};
    var persona1 = { edad: this.edad1, peso: this.peso1 };
    var persona2 = { edad: this.edad2, peso: this.peso2 };
    var persona3 = { edad: this.edad3, peso: this.peso3 };
    var persona4 = { edad: this.edad4, peso: this.peso4 };
    var persona5 = { edad: this.edad5, peso: this.peso5 };
    var persona6 = { edad: this.edad6, peso: this.peso6 };
    var persona7 = { edad: this.edad7, peso: this.peso7 };
    var persona8 = { edad: this.edad8, peso: this.peso8 };
    var persona9 = { edad: this.edad9, peso: this.peso9 };
    var persona10 = { edad: this.edad10, peso: this.peso10 };

    if (persona1.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona1.peso);
    } else if (persona1.edad > 14 && persona1.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona1.peso);
    } else if (persona1.edad > 31 && persona1.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona1.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona1.peso);
    }
    if (persona2.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona2.peso);
    } else if (persona2.edad > 14 && persona2.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona2.peso);
    } else if (persona2.edad > 31 && persona2.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona2.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona2.peso);
    }
    if (persona3.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona3.peso);
    } else if (persona3.edad > 14 && persona3.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona3.peso);
    } else if (persona3.edad > 31 && persona3.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona3.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona3.peso);
    }
    if (persona4.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona4.peso);
    } else if (persona4.edad > 14 && persona4.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona4.peso);
    } else if (persona4.edad > 31 && persona4.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona4.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona4.peso);
    }
    if (persona5.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona5.peso);
    } else if (persona5.edad > 14 && persona5.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona5.peso);
    } else if (persona5.edad > 31 && persona5.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona5.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona5.peso);
    }
    if (persona6.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona6.peso);
    } else if (persona6.edad > 14 && persona6.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona6.peso);
    } else if (persona6.edad > 31 && persona6.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona6.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona6.peso);
    }
    if (persona7.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona7.peso);
    } else if (persona7.edad > 14 && persona7.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona7.peso);
    } else if (persona7.edad > 31 && persona7.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona7.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona7.peso);
    }
    if (persona8.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona8.peso);
    } else if (persona8.edad > 14 && persona8.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona8.peso);
    } else if (persona8.edad > 31 && persona8.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona8.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona8.peso);
    }
    if (persona9.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona9.peso);
    } else if (persona9.edad > 14 && persona9.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona9.peso);
    } else if (persona9.edad > 31 && persona9.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona9.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona9.peso);
    }
    if (persona10.edad < 14) {
      this.ninos = this.ninos + 1;
      this.promeninos = this.promeninos + Number(persona10.peso);
    } else if (persona10.edad > 14 && persona10.edad < 31) {
      this.jovenes = this.jovenes + 1;
      this.promejovenes = this.promejovenes + Number(persona10.peso);
    } else if (persona10.edad > 31 && persona10.edad < 61) {
      this.adultos = this.adultos + 1;
      this.promeadultos = this.promeadultos + Number(persona10.peso);
    } else {
      this.viejos = this.viejos + 1;
      this.promeviejos = this.promeviejos + Number(persona10.peso);
    }
    //this.total = this.total + Number(this.objeto[property]);

    this.promeninos = (this.promeninos / this.ninos) ||0;
    this.promejovenes = (this.promejovenes/ this.jovenes) ||0;
    this.promeadultos = (this.promeadultos / this.adultos) || 0;
    this.promeviejos = (this.promeviejos / this.viejos) || 0;
  }
}
