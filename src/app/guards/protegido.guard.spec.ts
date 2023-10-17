import { TestBed } from '@angular/core/testing';

import { ProtegidoGuard } from './protegido.guard';

describe('ProtegidoGuard', () => {
  let guard: ProtegidoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtegidoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
