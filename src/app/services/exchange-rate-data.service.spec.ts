import { TestBed } from '@angular/core/testing';

import { ExchangeRateDataService } from './exchange-rate-data.service';

describe('ExchangeRateDataService', () => {
  let service: ExchangeRateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
