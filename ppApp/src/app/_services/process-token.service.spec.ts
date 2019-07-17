import { TestBed } from '@angular/core/testing';

import { ProcessTokenService } from './process-token.service';

describe('ProcessTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessTokenService = TestBed.get(ProcessTokenService);
    expect(service).toBeTruthy();
  });
});
