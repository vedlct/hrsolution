import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalSummeryResultComponent } from './appraisal-summery-result.component';

describe('AppraisalSummeryResultComponent', () => {
  let component: AppraisalSummeryResultComponent;
  let fixture: ComponentFixture<AppraisalSummeryResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalSummeryResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalSummeryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
