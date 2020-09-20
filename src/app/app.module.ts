import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ExchangeRateComponent } from './currency-list/exchange-rate/exchange-rate.component';
import { DATA_SOURCE_TOKEN } from './data-sources/data-source';
import { CbrJsonDataSource } from './data-sources/cbr-json-data-source';
import { CbrXmlDataSource } from './data-sources/cbr-xml-data-source';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: DATA_SOURCE_TOKEN, useClass: CbrJsonDataSource, multi: true},
    { provide: DATA_SOURCE_TOKEN, useClass: CbrXmlDataSource, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
