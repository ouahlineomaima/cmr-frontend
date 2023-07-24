import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixLangueComponent } from './choix-langue.component';

describe('ChoixLangueComponent', () => {
  let component: ChoixLangueComponent;
  let fixture: ComponentFixture<ChoixLangueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixLangueComponent]
    });
    fixture = TestBed.createComponent(ChoixLangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
