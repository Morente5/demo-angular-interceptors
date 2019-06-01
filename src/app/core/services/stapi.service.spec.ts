import { TestBed } from '@angular/core/testing';

import { StapiService } from './stapi.service';

describe('StapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StapiService = TestBed.get(StapiService);
    expect(service).toBeTruthy();
  });
});
