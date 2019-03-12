import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayHeadComponent } from './pay-head.component';

describe('PayHeadComponent', () => {
  let component: PayHeadComponent;
  let fixture: ComponentFixture<PayHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
