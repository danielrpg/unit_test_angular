import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

fdescribe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the stock to 0', () => {
    expect(service.stock).toBe(0);
  });

  it('should increment the stock', () => {
    expect(service.stock).toBe(0);
    service.increment()
    expect(service.stock).toBe(1);
  });

  it('should decrement the stock', () => {
    expect(service.stock).toBe(0);
    service.decrement();
    expect(service.stock).toBe(-1);
  });
  
});
