import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataRequestComponent } from './patient-data-request.component';

describe('PatientDataRequestComponent', () => {
  let component: PatientDataRequestComponent;
  let fixture: ComponentFixture<PatientDataRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDataRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDataRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
