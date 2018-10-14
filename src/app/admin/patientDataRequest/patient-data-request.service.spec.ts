import { TestBed, inject } from '@angular/core/testing';

import { PatientDataRequestService } from './patient-data-request.service';

describe('PatientDataRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDataRequestService]
    });
  });

  it('should be created', inject([PatientDataRequestService], (service: PatientDataRequestService) => {
    expect(service).toBeTruthy();
  }));
});
