import { TestBed } from '@angular/core/testing';

import { AuthStudentsService } from './auth-students.service';

describe('AuthStudentsService', () => {
  let service: AuthStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
