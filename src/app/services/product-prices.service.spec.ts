import { TestBed } from '@angular/core/testing';

import { ProductPricesService } from './product-prices.service';

describe('ProductPricesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductPricesService = TestBed.get(ProductPricesService);
    expect(service).toBeTruthy();
  });
});
