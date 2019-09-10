import { TestBed } from '@angular/core/testing';

import { FirebasePublicationsService } from './firebase-publications.service';

describe('FirebasePublicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasePublicationsService = TestBed.get(FirebasePublicationsService);
    expect(service).toBeTruthy();
  });
});
