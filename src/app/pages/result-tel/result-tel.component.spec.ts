import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTelComponent } from './result-tel.component';

describe('ResultTelComponent', () => {
  let component: ResultTelComponent;
  let fixture: ComponentFixture<ResultTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultTelComponent]
    });
    fixture = TestBed.createComponent(ResultTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
