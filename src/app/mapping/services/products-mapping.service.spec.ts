import { TestBed } from '@angular/core/testing';

import { ProductsMappingService } from './products-mapping.service';

describe('ProductsMappingService', () => {
  let service: ProductsMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
