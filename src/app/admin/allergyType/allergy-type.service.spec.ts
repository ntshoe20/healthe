import { TestBed, inject } from '@angular/core/testing';

import { AllergyTypeService } from './allergy-type.service';

describe('AllergyTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllergyTypeService]
    });
  });

  it('should be created', inject([AllergyTypeService], (service: AllergyTypeService) => {
    expect(service).toBeTruthy();
  }));
});
