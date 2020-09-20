import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ExchangeRateComponent } from './currency-list/exchange-rate/exchange-rate.component';
import { DATA_SOURCE_TOKEN, CbrJsonDataSource, CbrXmlDataSource } from './business-logic/data-sources';


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
