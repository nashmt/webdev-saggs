import { TestBed } from '@angular/core/testing';

import { ISHTTPService } from './ishttp.service';

describe('ISHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ISHTTPService = TestBed.get(ISHTTPService);
    expect(service).toBeTruthy();
  });
});
