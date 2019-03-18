import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEmployeeComponent } from './past-employee.component';

describe('PastEmployeeComponent', () => {
  let component: PastEmployeeComponent;
  let fixture: ComponentFixture<PastEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
