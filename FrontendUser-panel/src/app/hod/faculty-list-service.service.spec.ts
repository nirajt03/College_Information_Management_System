import { TestBed } from '@angular/core/testing';

import { FacultyListServiceService } from './faculty-list-service.service';

describe('FacultyListServiceService', () => {
  let service: FacultyListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
