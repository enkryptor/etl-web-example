import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateDataService } from 'src/app/business-logic/exchange-rate-data.service';
import { CurrencyExchangeRate } from 'src/app/business-logic/interfaces';

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
