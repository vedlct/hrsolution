import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowovertimeComponent } from './showovertime.component';

describe('ShowovertimeComponent', () => {
  let component: ShowovertimeComponent;
  let fixture: ComponentFixture<ShowovertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowovertimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowovertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
