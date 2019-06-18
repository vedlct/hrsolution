import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppraisalScaleComponent } from './create-appraisal-scale.component';

describe('CreateAppraisalScaleComponent', () => {
  let component: CreateAppraisalScaleComponent;
  let fixture: ComponentFixture<CreateAppraisalScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppraisalScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppraisalScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
