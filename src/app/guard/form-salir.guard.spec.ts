import { TestBed } from '@angular/core/testing';

import { FormSalirGuard } from './form-salir.guard';

describe('FormSalirGuard', () => {
  let guard: FormSalirGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormSalirGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
