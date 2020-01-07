import { TestBed } from '@angular/core/testing';

import { PetfinderService } from './petfinder.service';

describe('PetfinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetfinderService = TestBed.get(PetfinderService);
    expect(service).toBeTruthy();
  });
});
