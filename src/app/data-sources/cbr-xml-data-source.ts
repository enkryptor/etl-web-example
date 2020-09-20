import { DataSource } from './data-source';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { XmlParser } from './parsers/xml-parser';

@Injectable()
export class CbrXmlDataSource extends DataSource {
  constructor(http: HttpClient) {
    super(http)
  }

  protected url = 'https://www.cbr-xml-daily.ru/daily_utf8.xml';

  protected parser = new XmlParser();
}
