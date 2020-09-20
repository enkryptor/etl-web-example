import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { DataSource } from './data-sources';

import { ExchangeRateDataService } from './exchange-rate-data.service';
import { CurrencyExchangeRate } from './models';

describe('ExchangeRateDataService', () => {
  it('should give first value', () => {
    const service = new ExchangeRateDataService([ new DataSourceMock(), new DataSourceMock2()])
    service.data$.pipe(first())
      .subscribe((response: CurrencyExchangeRate[]) => expect(response[0].roubles).toEqual(11.11));
  });
  it('should give next value on error', () => {
    const service = new ExchangeRateDataService([ new DataSourceMockFail(), new DataSourceMock2()])
    service.data$.pipe(first())
      .subscribe((response: CurrencyExchangeRate[]) => expect(response[0].roubles).toEqual(22.22));
  });
});

class DataSourceMock extends DataSource {
  getData() {
    return of([{
      code: 'EUR',
      roubles: 11.11
    }]);
  }
}

class DataSourceMock2 extends DataSource {
  getData() {
    return of([{
      code: 'EUR',
      roubles: 22.22
    }]);
  }
}

class DataSourceMockFail extends DataSource {
  getData() {
    throw new Error();
    return of([{
      code: 'EUR',
      roubles: 33.33
    }]);
  }
}
