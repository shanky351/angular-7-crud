import { TestBed } from '@angular/core/testing';

import { GlobalFunctionsService } from '../common/global-functions.service';

describe('GlobalFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalFunctionsService = TestBed.get(GlobalFunctionsService);
    expect(service).toBeTruthy();
  });
});
