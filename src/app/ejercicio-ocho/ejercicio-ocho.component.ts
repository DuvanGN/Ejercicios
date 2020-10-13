import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-ocho',
  templateUrl: './ejercicio-ocho.component.html',
  styleUrls: ['./ejercicio-ocho.component.scss']
})
export class EjercicioOchoComponent  {
  title = 'Ejercicio 8';
  descripcion = 'Ingrese 10 personas segun su edad y su peso para obtener el promedio de cada grupo publacional:';
  ninos   =  0;
  jovenes =  0;
  adultos =  0;
  viejos  =  0;
  promeninos   =  0;
  promejovenes =  0;
  promeadultos =  0;
  promeviejos  =  0;
  edad1:    number;
  edad2:    number;
  edad3:    number;
  edad4:    number;
  edad5:    number;
  edad6:    number;
  edad7:    number;
  edad8:    number;
  edad9:    number;
  edad10:   number;
  peso1:    number;
  peso2:    number;
  peso3:    number;
  peso4:    number;
  peso5:    number;
  peso6:    number;
  peso7:    number;
  peso8:    number;
  peso9:    number;
  peso10:   number;
  mensaje : string;
  edades = [];
  pesos = [];
  object = {}


  onCalcular(): void {
    this.ninos   =  0;
    this.jovenes =  0;
    this.adultos =  0;
    this.viejos  =  0;
    this.edades = [this.edad1, this.edad2, this.edad3, this.edad4, this.edad5, this.edad6, this.edad7, this.edad8, this.edad9, this.edad10];
    //this.edades = [[this.edad1, this.peso1]], [this.edad2,this.peso2], [this.edad3], [this.edad4], [this.edad5], [this.edad6], [this.edad7], [this.edad8], [this.edad9], [this.edad10];
    //this.pesos = [this.peso1], , this.peso3, this.peso4, this.peso5, this.peso6, this.peso7, this.peso8, this.peso9, this.peso10];
    //const object = {edad1: this.peso1, edad2: this.peso2, edad3: this.peso3};
    var myCar = {edad: this.edad1, peso: this.peso1};
    var myCar = {edad: this.edad2, peso: this.peso2};

    for (const property in this.edades) {
      console.log(myCar.edad);
      if (this.edades[property] < 14) {
        this.ninos = this.ninos + 1;    

      } else if (this.edades[property] > 14 && this.edades[property] < 31) {
        this.jovenes = this.jovenes + 1;
      } else if (this.edades[property] > 31 && this.edades[property] < 61) {
        this.adultos = this.adultos + 1;
      } else{
        this.viejos = this.viejos + 1;
      }
      //this.total = this.total + Number(this.objeto[property]);
    }

  }
}
