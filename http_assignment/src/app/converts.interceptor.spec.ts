import { TestBed } from '@angular/core/testing';

import { ConvertsInterceptor } from './converts.interceptor';

describe('ConvertsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConvertsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ConvertsInterceptor = TestBed.inject(ConvertsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
