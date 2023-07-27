import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixSimulationComponent } from './choix-simulation.component';

describe('ChoixSimulationComponent', () => {
  let component: ChoixSimulationComponent;
  let fixture: ComponentFixture<ChoixSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixSimulationComponent]
    });
    fixture = TestBed.createComponent(ChoixSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
