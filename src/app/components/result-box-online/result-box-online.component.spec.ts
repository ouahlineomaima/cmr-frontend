import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBoxOnlineComponent } from './result-box-online.component';

describe('ResultBoxOnlineComponent', () => {
  let component: ResultBoxOnlineComponent;
  let fixture: ComponentFixture<ResultBoxOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultBoxOnlineComponent]
    });
    fixture = TestBed.createComponent(ResultBoxOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
