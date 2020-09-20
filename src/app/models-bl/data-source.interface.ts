import { StringParser } from 'src/app/interfaces';
import { CurrencyExchangeRate } from './currency-exchange-rate.interface';

/**
 * Источник информации о курсе обмена
 */
export interface DataSource {
  url: string;
  parser: StringParser<CurrencyExchangeRate[]>;
}
