import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './ejercicio-dos/ejercicio-dos.component';
import { EjercicioTresComponent } from './ejercicio-tres/ejercicio-tres.component';
import { EjercicioCuatroComponent } from './ejercicio-cuatro/ejercicio-cuatro.component';
import { EjercicioCincoComponent } from './ejercicio-cinco/ejercicio-cinco.component';
import { EjercicioSeisComponent } from './ejercicio-seis/ejercicio-seis.component';
import { EjercicioSieteComponent } from './ejercicio-siete/ejercicio-siete.component';
import { EjercicioOchoComponent } from './ejercicio-ocho/ejercicio-ocho.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'EjercicioUno',
        component: EjercicioUnoComponent,
      },
      {
        path: 'EjercicioDos',
        component: EjercicioDosComponent,
      },
      {
        path: 'EjercicioTres',
        component: EjercicioTresComponent,
      },
      {
        path: 'EjercicioCuatro',
        component: EjercicioCuatroComponent,
      },
      {
        path: 'EjercicioCinco',
        component: EjercicioCincoComponent,
      },
      {
        path: 'EjercicioSeis',
        component: EjercicioSeisComponent,
      },
      {
        path: 'EjercicioSiete',
        component: EjercicioSieteComponent,
      },
      {
        path: 'EjercicioOcho',
        component: EjercicioOchoComponent,
      },
      {
        path: '**',
        component: NotfoundpageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
