import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEmployeeSalarySetupComponent } from './pay-employee-salary-setup.component';

describe('PayEmployeeSalarySetupComponent', () => {
  let component: PayEmployeeSalarySetupComponent;
  let fixture: ComponentFixture<PayEmployeeSalarySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayEmployeeSalarySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayEmployeeSalarySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
