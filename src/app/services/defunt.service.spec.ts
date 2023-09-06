import { TestBed } from '@angular/core/testing';

import { DefuntService } from './defunt.service';

describe('DefuntService', () => {
  let service: DefuntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefuntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
