import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioSieteComponent } from './ejercicio-siete.component';

describe('EjercicioSieteComponent', () => {
  let component: EjercicioSieteComponent;
  let fixture: ComponentFixture<EjercicioSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioSieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
