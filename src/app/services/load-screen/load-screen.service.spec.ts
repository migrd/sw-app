import { TestBed } from '@angular/core/testing';

import { LoadScreenService } from './load-screen.service';

describe('LoadScreenService', () => {
  let service: LoadScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
