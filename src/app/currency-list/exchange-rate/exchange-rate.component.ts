import { Component, OnInit, Input } from '@angular/core';
import { CurrencyExchangeRate } from 'src/app/models-bl';

const DECIMAL_PLACES = 4;

/**
 * Презентационный компонент для показа курса валюты
 */
@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  @Input()
  public set rate(rate: CurrencyExchangeRate) {
    this.value = rate.roubles.toFixed(DECIMAL_PLACES)
  }

  public value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
