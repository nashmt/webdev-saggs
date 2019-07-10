import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapRequestComponent } from './bootstrap-request.component';

describe('BootstrapRequestComponent', () => {
  let component: BootstrapRequestComponent;
  let fixture: ComponentFixture<BootstrapRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
