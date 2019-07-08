import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessProductsComponent } from './access-products.component';

describe('AccessProductsComponent', () => {
  let component: AccessProductsComponent;
  let fixture: ComponentFixture<AccessProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
