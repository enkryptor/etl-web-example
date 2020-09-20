import { StringParser } from 'src/app/business-logic/interfaces';
import { CurrencyExchangeRate } from 'src/app/business-logic/models';

interface ParsedDataFormat {
  Valute: {
    [key: string]: {
      CharCode: string;
      Value: number;
    }
  }
}

export class JsonParser implements StringParser<CurrencyExchangeRate[]> {
  public parse(input: string): CurrencyExchangeRate[] {
    const json: ParsedDataFormat = JSON.parse(input);
    return Object.values(json.Valute).map(x => ({
      code: x.CharCode,
      roubles: x.Value
    }))
  }
}
