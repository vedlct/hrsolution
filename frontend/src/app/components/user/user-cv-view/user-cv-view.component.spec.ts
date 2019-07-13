import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvViewComponent } from './user-cv-view.component';

describe('UserCvViewComponent', () => {
  let component: UserCvViewComponent;
  let fixture: ComponentFixture<UserCvViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCvViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
