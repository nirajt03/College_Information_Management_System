import { TestBed } from '@angular/core/testing';

import { AuthPrincipalsService } from './auth-principals.service';

describe('AuthPrincipalsService', () => {
  let service: AuthPrincipalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPrincipalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
