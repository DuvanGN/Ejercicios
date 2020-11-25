import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './ejercicio-dos/ejercicio-dos.component';
import { EjercicioTresComponent } from './ejercicio-tres/ejercicio-tres.component';
import { EjercicioCuatroComponent } from './ejercicio-cuatro/ejercicio-cuatro.component';
import { EjercicioCincoComponent } from './ejercicio-cinco/ejercicio-cinco.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LayoutComponent } from './layout/layout.component';
import { EjercicioSeisComponent } from './ejercicio-seis/ejercicio-seis.component';
import { EjercicioSieteComponent } from './ejercicio-siete/ejercicio-siete.component';
import { EjercicioOchoComponent } from './ejercicio-ocho/ejercicio-ocho.component';
import { EjercicioNueveComponent } from './ejercicio-nueve/ejercicio-nueve.component';
import { EjercicioDiezComponent } from './ejercicio-diez/ejercicio-diez.component';
import { ControlEjerciciosComponent } from './control-ejercicios/control-ejercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    EjercicioUnoComponent,
    EjercicioDosComponent,
    EjercicioTresComponent,
    EjercicioCuatroComponent,
    EjercicioCincoComponent,
    PruebasComponent,
    HeaderComponent,
    NotfoundpageComponent,
    LayoutComponent,
    EjercicioSeisComponent,
    EjercicioSieteComponent,
    EjercicioOchoComponent,
    EjercicioNueveComponent,
    EjercicioDiezComponent,
    ControlEjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
