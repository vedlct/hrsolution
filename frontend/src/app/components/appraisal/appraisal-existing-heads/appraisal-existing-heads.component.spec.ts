import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalExistingHeadsComponent } from './appraisal-existing-heads.component';

describe('AppraisalExistingHeadsComponent', () => {
  let component: AppraisalExistingHeadsComponent;
  let fixture: ComponentFixture<AppraisalExistingHeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalExistingHeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalExistingHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
