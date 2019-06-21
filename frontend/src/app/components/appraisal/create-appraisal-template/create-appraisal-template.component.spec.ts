import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppraisalTemplateComponent } from './create-appraisal-template.component';

describe('CreateAppraisalTemplateComponent', () => {
  let component: CreateAppraisalTemplateComponent;
  let fixture: ComponentFixture<CreateAppraisalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppraisalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppraisalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
