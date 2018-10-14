import { TestBed, inject } from '@angular/core/testing';

import { EmergencyContactService } from './emergency-contact.service';

describe('EmergencyContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmergencyContactService]
    });
  });

  it('should be created', inject([EmergencyContactService], (service: EmergencyContactService) => {
    expect(service).toBeTruthy();
  }));
});
