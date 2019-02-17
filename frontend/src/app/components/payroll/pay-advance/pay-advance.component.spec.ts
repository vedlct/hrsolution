import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAdvanceComponent } from './pay-advance.component';

describe('PayAdvanceComponent', () => {
  let component: PayAdvanceComponent;
  let fixture: ComponentFixture<PayAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
