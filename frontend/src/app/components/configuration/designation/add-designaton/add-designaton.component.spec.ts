import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignatonComponent } from './add-designaton.component';

describe('AddDesignatonComponent', () => {
  let component: AddDesignatonComponent;
  let fixture: ComponentFixture<AddDesignatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesignatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
