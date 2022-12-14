import { TestBed } from '@angular/core/testing';

import { LOGSInterceptor } from './logs.interceptor';

describe('LOGSInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LOGSInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LOGSInterceptor = TestBed.inject(LOGSInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
