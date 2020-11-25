import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEjerciciosComponent } from './control-ejercicios.component';

describe('ControlEjerciciosComponent', () => {
  let component: ControlEjerciciosComponent;
  let fixture: ComponentFixture<ControlEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEjerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
