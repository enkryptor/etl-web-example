import { DataSource } from './data-source';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonParser } from './parsers/json-parser';

@Injectable()
export class CbrJsonDataSource extends DataSource {
  constructor(http: HttpClient) {
    super(http)
  }

  protected url = 'https://www.cbr-xml-daily.ru/daily_json.js';

  protected parser = new JsonParser();
}
