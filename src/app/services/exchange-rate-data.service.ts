import { Injectable } from '@angular/core';
import { CurrencyExchangeRate } from 'src/app/models-bl';
import { Observable, of } from 'rxjs';

@Injectable()
export class ExchangeRateDataService {
  public data$: Observable<CurrencyExchangeRate[]>;

  constructor() {
    // mock
    this.data$ = of([{
      code: 'EUR',
      roubles: 111.11
    }]);
  }
}
