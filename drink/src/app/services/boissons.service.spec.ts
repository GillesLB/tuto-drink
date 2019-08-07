import { TestBed } from '@angular/core/testing';

import { BoissonsService } from './boissons.service';

describe('BoissonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoissonsService = TestBed.get(BoissonsService);
    expect(service).toBeTruthy();
  });
});
