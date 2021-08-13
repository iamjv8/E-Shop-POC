import { TestBed } from '@angular/core/testing';

import { AuthMappingService } from './auth-mapping.service';

describe('AuthMappingService', () => {
  let service: AuthMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
