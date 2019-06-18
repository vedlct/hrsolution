import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppraisalHeadComponent } from './create-appraisal-head.component';

describe('CreateAppraisalHeadComponent', () => {
  let component: CreateAppraisalHeadComponent;
  let fixture: ComponentFixture<CreateAppraisalHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppraisalHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppraisalHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
