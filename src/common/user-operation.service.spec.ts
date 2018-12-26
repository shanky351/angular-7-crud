import { TestBed } from '@angular/core/testing';

import { UserOperationService } from './user-operation.service';

describe('UserOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserOperationService = TestBed.get(UserOperationService);
    expect(service).toBeTruthy();
  });
});
