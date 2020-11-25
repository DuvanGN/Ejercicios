import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioNueveComponent } from './ejercicio-nueve.component';

describe('EjercicioNueveComponent', () => {
  let component: EjercicioNueveComponent;
  let fixture: ComponentFixture<EjercicioNueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioNueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioNueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
