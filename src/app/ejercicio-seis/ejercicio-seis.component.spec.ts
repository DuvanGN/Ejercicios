import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioSeisComponent } from './ejercicio-seis.component';

describe('EjercicioSeisComponent', () => {
  let component: EjercicioSeisComponent;
  let fixture: ComponentFixture<EjercicioSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
