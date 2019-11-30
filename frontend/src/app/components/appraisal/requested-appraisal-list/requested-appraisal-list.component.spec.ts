import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedAppraisalListComponent } from './requested-appraisal-list.component';

describe('RequestedAppraisalListComponent', () => {
  let component: RequestedAppraisalListComponent;
  let fixture: ComponentFixture<RequestedAppraisalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedAppraisalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedAppraisalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
