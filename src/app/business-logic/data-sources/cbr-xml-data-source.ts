import { HttpDataSource } from './http-data-source';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CbrXmlParser } from './parsers';

@Injectable()
export class CbrXmlDataSource extends HttpDataSource {
  constructor(http: HttpClient) {
    super(http)
  }

  protected url = 'https://www.cbr-xml-daily.ru/daily_utf8.xml';

  protected parser = new CbrXmlParser();
}
