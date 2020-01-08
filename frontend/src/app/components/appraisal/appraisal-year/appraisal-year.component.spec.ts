import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalYearComponent } from './appraisal-year.component';

describe('AppraisalYearComponent', () => {
  let component: AppraisalYearComponent;
  let fixture: ComponentFixture<AppraisalYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
