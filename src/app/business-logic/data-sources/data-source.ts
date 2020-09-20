import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { CurrencyExchangeRate } from '../interfaces';

export const DATA_SOURCE_TOKEN = new InjectionToken<DataSource[]>('data-source');

export abstract class DataSource {
  public abstract getData(): Observable<CurrencyExchangeRate[]>;
}
