import { TestBed } from '@angular/core/testing';

import { ShttpService } from './shttp.service';

describe('ShttpService', () => {
  let service: ShttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
