import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitOfMeasureListPage } from './product-unit-of-measure-list.page';

describe('ProductUnitOfMeasureListPage', () => {
  let component: ProductUnitOfMeasureListPage;
  let fixture: ComponentFixture<ProductUnitOfMeasureListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUnitOfMeasureListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnitOfMeasureListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
