import { CurrencyExchangeRate } from 'src/app/models-bl';
import { StringParser } from 'src/app/interfaces';

export class XmlParser implements StringParser<CurrencyExchangeRate[]> {
  public parse(input: string): CurrencyExchangeRate[] {
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(input, "text/xml");
    const nodes = xmlDocument.getElementsByTagName('Valute');
    const result: CurrencyExchangeRate[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes.item(i);
      const code = node.getElementsByTagName('CharCode').item(0).innerHTML;
      const roubles = Number.parseFloat(
        node.getElementsByTagName('Value').item(0).innerHTML.replace(',', '.')
      );
      result.push(({ code, roubles }))
    }
    return result;
  }
}
