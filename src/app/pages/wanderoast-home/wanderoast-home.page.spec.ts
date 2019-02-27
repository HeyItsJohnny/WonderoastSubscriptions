import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanderoastHomePage } from './wanderoast-home.page';

describe('WanderoastHomePage', () => {
  let component: WanderoastHomePage;
  let fixture: ComponentFixture<WanderoastHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanderoastHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanderoastHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
