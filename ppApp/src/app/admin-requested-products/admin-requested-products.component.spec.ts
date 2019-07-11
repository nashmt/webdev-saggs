import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestedProductsComponent } from './admin-requested-products.component';

describe('AdminRequestedProductsComponent', () => {
  let component: AdminRequestedProductsComponent;
  let fixture: ComponentFixture<AdminRequestedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
