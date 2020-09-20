import { Component, OnInit, Input } from '@angular/core';
import { CurrencyExchangeRate } from 'src/app/business-logic/interfaces'

const DECIMAL_PLACES = 4;

/**
 * Презентационный компонент для показа курса валюты
 */
@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent {

  @Input()
  public set rate(rate: CurrencyExchangeRate) {
    this.value = rate.roubles.toFixed(DECIMAL_PLACES)
  }

  public value: string;
}
