import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { StringParser, CurrencyExchangeRate } from '../interfaces';

export abstract class HttpDataSource {
  protected abstract url: string;

  protected abstract parser: StringParser<CurrencyExchangeRate[]>;

  constructor(private readonly http: HttpClient) {
  }

  public getData(): Observable<CurrencyExchangeRate[]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(map(x => this.parser.parse(x)));
  }
}
