import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationEnLigneComponent } from './simulation-en-ligne.component';

describe('SimulationEnLigneComponent', () => {
  let component: SimulationEnLigneComponent;
  let fixture: ComponentFixture<SimulationEnLigneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationEnLigneComponent]
    });
    fixture = TestBed.createComponent(SimulationEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
