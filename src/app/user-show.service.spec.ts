import { TestBed } from '@angular/core/testing';

import { UserShowService } from './user-show.service';

describe('UserShowService', () => {
  let service: UserShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
