import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppraisalYearComponent } from './edit-appraisal-year.component';

describe('EditAppraisalYearComponent', () => {
  let component: EditAppraisalYearComponent;
  let fixture: ComponentFixture<EditAppraisalYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppraisalYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppraisalYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
