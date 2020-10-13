import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCincoComponent } from './ejercicio-cinco.component';

describe('EjercicioCincoComponent', () => {
  let component: EjercicioCincoComponent;
  let fixture: ComponentFixture<EjercicioCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
