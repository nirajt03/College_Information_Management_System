import { TestBed } from '@angular/core/testing';

import { AuthFacultysService } from './auth-facultys.service';

describe('AuthFacultysService', () => {
  let service: AuthFacultysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFacultysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
