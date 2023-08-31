import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationTelephoniqueComponent } from './simulation-telephonique.component';

describe('SimulationTelephoniqueComponent', () => {
  let component: SimulationTelephoniqueComponent;
  let fixture: ComponentFixture<SimulationTelephoniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationTelephoniqueComponent]
    });
    fixture = TestBed.createComponent(SimulationTelephoniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
