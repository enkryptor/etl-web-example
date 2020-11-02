import { StringParser, CurrencyExchangeRate } from 'src/app/business-logic/interfaces';

interface ParsedDataFormat {
  Valute: {
    [key: string]: {
      CharCode: string;
      Value: number;
    }
  }
}

export class CbrJsonParser implements StringParser<CurrencyExchangeRate[]> {
  public parse(input: string): CurrencyExchangeRate[] {
    const json: ParsedDataFormat = JSON.parse(input);
    return Object.values(json.Valute).map(x => ({
      code: x.CharCode,
      roubles: x.Value
    }))
  }
}
