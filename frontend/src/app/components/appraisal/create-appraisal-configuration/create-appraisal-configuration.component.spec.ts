import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppraisalConfigurationComponent } from './create-appraisal-configuration.component';

describe('CreateAppraisalConfigurationComponent', () => {
  let component: CreateAppraisalConfigurationComponent;
  let fixture: ComponentFixture<CreateAppraisalConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppraisalConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppraisalConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
