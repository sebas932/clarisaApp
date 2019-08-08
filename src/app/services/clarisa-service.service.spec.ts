import { TestBed } from '@angular/core/testing';

import { ClarisaServiceService } from './clarisa-service.service';

describe('ClarisaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClarisaServiceService = TestBed.get(ClarisaServiceService);
    expect(service).toBeTruthy();
  });
});
