import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPackComponent } from './event-pack.component';

describe('EventPackComponent', () => {
  let component: EventPackComponent;
  let fixture: ComponentFixture<EventPackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPackComponent]
    });
    fixture = TestBed.createComponent(EventPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
