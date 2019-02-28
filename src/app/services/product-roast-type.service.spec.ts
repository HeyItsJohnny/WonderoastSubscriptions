import { TestBed } from '@angular/core/testing';

import { ProductRoastTypeService } from './product-roast-type.service';

describe('ProductRoastTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductRoastTypeService = TestBed.get(ProductRoastTypeService);
    expect(service).toBeTruthy();
  });
});
