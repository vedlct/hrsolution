import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalSummeryComponent } from './appraisal-summery.component';

describe('AppraisalSummeryComponent', () => {
  let component: AppraisalSummeryComponent;
  let fixture: ComponentFixture<AppraisalSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
