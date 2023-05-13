import { TestBed } from '@angular/core/testing';

import { AuthHodsService } from './auth-hods.service';

describe('AuthHodsService', () => {
  let service: AuthHodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
