import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasDeRetraiteComponent } from './pas-de-retraite.component';

describe('PasDeRetraiteComponent', () => {
  let component: PasDeRetraiteComponent;
  let fixture: ComponentFixture<PasDeRetraiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasDeRetraiteComponent]
    });
    fixture = TestBed.createComponent(PasDeRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
