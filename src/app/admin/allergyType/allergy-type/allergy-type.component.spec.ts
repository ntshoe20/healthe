import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyTypeComponent } from './allergy-type.component';

describe('AllergyTypeComponent', () => {
  let component: AllergyTypeComponent;
  let fixture: ComponentFixture<AllergyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
