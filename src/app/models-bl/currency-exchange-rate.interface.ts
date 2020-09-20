/**
 * Информация о курсе обмена валюты
 */
export interface CurrencyExchangeRate {
  /**
   * Банковский код
   */
  code: string;

  /**
   * Курс по отношению к российскому рублю
   */
  roubles: number;
}
