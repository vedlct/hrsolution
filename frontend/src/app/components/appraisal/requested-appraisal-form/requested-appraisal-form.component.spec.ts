import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedAppraisalFormComponent } from './requested-appraisal-form.component';

describe('RequestedAppraisalFormComponent', () => {
  let component: RequestedAppraisalFormComponent;
  let fixture: ComponentFixture<RequestedAppraisalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedAppraisalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedAppraisalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
