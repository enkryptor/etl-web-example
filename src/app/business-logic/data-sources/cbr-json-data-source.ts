import { HttpDataSource } from './http-data-source';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CbrJsonParser } from './parsers';

@Injectable()
export class CbrJsonDataSource extends HttpDataSource {
  constructor(http: HttpClient) {
    super(http)
  }

  protected url = 'https://www.cbr-xml-daily.ru/daily_json.js';

  protected parser = new CbrJsonParser();
}
