import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyExchangeRate } from '../models-bl';
import { StringParser } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const DATA_SOURCE_TOKEN = new InjectionToken<DataSource[]>('data-source');

export abstract class DataSource {
  protected abstract url: string;

  protected abstract parser: StringParser<CurrencyExchangeRate[]>;

  constructor(private readonly http: HttpClient) {
  }

  public getData(): Observable<CurrencyExchangeRate[]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(map(x => this.parser.parse(x)));
  }
}
