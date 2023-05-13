import { TestBed } from '@angular/core/testing';

import { HodListServiceService } from './hod-list-service.service';

describe('HodListServiceService', () => {
  let service: HodListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HodListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
