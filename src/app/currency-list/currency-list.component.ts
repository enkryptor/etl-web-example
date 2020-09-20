import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyExchangeRate } from '../models-bl/currency-exchange-rate.interface';
import { ExchangeRateDataService } from '../services/exchange-rate-data.service';

/**
 * "Умный" компонент для показа курсов обмена валют
 */
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
  providers: [
    ExchangeRateDataService
  ]
})
export class CurrencyListComponent {

  public rates$: Observable<CurrencyExchangeRate[]>;

  constructor(dataService: ExchangeRateDataService) {
    this.rates$ = dataService.data$;
  }
}
