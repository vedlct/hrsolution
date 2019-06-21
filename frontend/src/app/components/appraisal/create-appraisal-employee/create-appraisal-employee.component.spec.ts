import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppraisalEmployeeComponent } from './create-appraisal-employee.component';

describe('CreateAppraisalEmployeeComponent', () => {
  let component: CreateAppraisalEmployeeComponent;
  let fixture: ComponentFixture<CreateAppraisalEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppraisalEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppraisalEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
