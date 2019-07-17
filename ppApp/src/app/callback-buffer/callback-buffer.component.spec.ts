import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackBufferComponent } from './callback-buffer.component';

describe('CallbackBufferComponent', () => {
  let component: CallbackBufferComponent;
  let fixture: ComponentFixture<CallbackBufferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackBufferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
