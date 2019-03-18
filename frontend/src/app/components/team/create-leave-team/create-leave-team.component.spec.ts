import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaveTeamComponent } from './create-leave-team.component';

describe('CreateLeaveTeamComponent', () => {
  let component: CreateLeaveTeamComponent;
  let fixture: ComponentFixture<CreateLeaveTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLeaveTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLeaveTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
