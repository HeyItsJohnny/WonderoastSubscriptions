import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPricesListPage } from './product-prices-list.page';

describe('ProductPricesListPage', () => {
  let component: ProductPricesListPage;
  let fixture: ComponentFixture<ProductPricesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPricesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPricesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
