import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalHeadComponent } from './appraisal-head.component';

describe('AppraisalHeadComponent', () => {
  let component: AppraisalHeadComponent;
  let fixture: ComponentFixture<AppraisalHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
