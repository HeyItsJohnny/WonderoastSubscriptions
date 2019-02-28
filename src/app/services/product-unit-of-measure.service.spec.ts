import { TestBed } from '@angular/core/testing';

import { ProductUnitOfMeasureService } from './product-unit-of-measure.service';

describe('ProductUnitOfMeasureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductUnitOfMeasureService = TestBed.get(ProductUnitOfMeasureService);
    expect(service).toBeTruthy();
  });
});
