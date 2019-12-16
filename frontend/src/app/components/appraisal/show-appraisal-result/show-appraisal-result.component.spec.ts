import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppraisalResultComponent } from './show-appraisal-result.component';

describe('ShowAppraisalResultComponent', () => {
  let component: ShowAppraisalResultComponent;
  let fixture: ComponentFixture<ShowAppraisalResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAppraisalResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAppraisalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
