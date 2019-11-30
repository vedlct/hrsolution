import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppraisalEmployeeComponent } from './edit-appraisal-employee.component';

describe('EditAppraisalEmployeeComponent', () => {
  let component: EditAppraisalEmployeeComponent;
  let fixture: ComponentFixture<EditAppraisalEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppraisalEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppraisalEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
