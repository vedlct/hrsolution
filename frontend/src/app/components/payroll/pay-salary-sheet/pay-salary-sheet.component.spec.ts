import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySalarySheetComponent } from './pay-salary-sheet.component';

describe('PaySalarySheetComponent', () => {
  let component: PaySalarySheetComponent;
  let fixture: ComponentFixture<PaySalarySheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySalarySheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySalarySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
