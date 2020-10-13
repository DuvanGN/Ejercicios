import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioOchoComponent } from './ejercicio-ocho.component';

describe('EjercicioOchoComponent', () => {
  let component: EjercicioOchoComponent;
  let fixture: ComponentFixture<EjercicioOchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioOchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
