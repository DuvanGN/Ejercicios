import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDiezComponent } from './ejercicio-diez.component';

describe('EjercicioDiezComponent', () => {
  let component: EjercicioDiezComponent;
  let fixture: ComponentFixture<EjercicioDiezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioDiezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioDiezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
