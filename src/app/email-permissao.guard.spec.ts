import { TestBed } from '@angular/core/testing';

import { EmailPermissaoGuard } from './email-permissao.guard';

describe('EmailPermissaoGuard', () => {
  let guard: EmailPermissaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmailPermissaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
