import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiliteComponent } from './accueil.component';

describe('EligibiliteComponent', () => {
  let component: EligibiliteComponent;
  let fixture: ComponentFixture<EligibiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibiliteComponent]
    });
    fixture = TestBed.createComponent(EligibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
