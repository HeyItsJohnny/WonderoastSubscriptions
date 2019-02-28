import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRoastTypeListPage } from './product-roast-type-list.page';

describe('ProductRoastTypeListPage', () => {
  let component: ProductRoastTypeListPage;
  let fixture: ComponentFixture<ProductRoastTypeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRoastTypeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRoastTypeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
