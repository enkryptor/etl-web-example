import { StringParser, CurrencyExchangeRate } from 'src/app/business-logic/interfaces';

export class CbrXmlParser implements StringParser<CurrencyExchangeRate[]> {
  public parse(input: string): CurrencyExchangeRate[] {
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(input, "text/xml");
    const nodes = xmlDocument.evaluate('/ValCurs/Valute', xmlDocument, null, XPathResult.ANY_TYPE, null);

    const valutes = [];
    let node = nodes.iterateNext();
    while (node) {
        const valute = {};
        node.childNodes.forEach(x => valute[x.nodeName] = x.textContent);
        valutes.push(valute);
        node = nodes.iterateNext();
    }

    return valutes.map(valute => ({
      code: valute['CharCode'],
      roubles: Number.parseFloat(valute['Value'].replace(',', '.'))
    }))
  }
}
