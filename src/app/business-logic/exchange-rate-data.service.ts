import { Injectable, Inject } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { switchMap, startWith, catchError, map } from 'rxjs/operators';
import { CurrencyExchangeRate } from './models';
import { DataSource, DATA_SOURCE_TOKEN } from './data-sources';

const QUERY_INTERVAL_MS = 10000;

function euroFilter(data: CurrencyExchangeRate): boolean {
  return data.code === 'EUR';
}

@Injectable()
export class ExchangeRateDataService {
  public data$: Observable<CurrencyExchangeRate[]>;

  protected filter: (data: CurrencyExchangeRate) => boolean = euroFilter;

  constructor(@Inject(DATA_SOURCE_TOKEN) sources: DataSource[]) {
    let sourceIndex = 0;
    this.data$ = interval(QUERY_INTERVAL_MS).pipe(
      startWith(0),
      switchMap(() => sources[sourceIndex].getData()),
      catchError((error) => {
        console.error(error);
        const nextSource = sources[++sourceIndex];
        if (nextSource) {
          return nextSource.getData()
        }
        throw error;
      }),
      map(list => list.filter(x => this.filter(x)))
    )
  }
}
