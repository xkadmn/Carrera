import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugador1Component } from './jugador1.component';

describe('Jugador1Component', () => {
  let component: Jugador1Component;
  let fixture: ComponentFixture<Jugador1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Jugador1Component]
    });
    fixture = TestBed.createComponent(Jugador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
