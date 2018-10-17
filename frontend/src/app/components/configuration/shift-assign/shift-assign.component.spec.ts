import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftAssignComponent } from './shift-assign.component';

describe('ShiftAssignComponent', () => {
  let component: ShiftAssignComponent;
  let fixture: ComponentFixture<ShiftAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
