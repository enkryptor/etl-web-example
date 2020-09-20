import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ExchangeRateComponent } from './currency-list/exchange-rate/exchange-rate.component';
import { DATA_SOURCE_LIST, DATA_SOURCE_TOKEN } from './business-logic/data-sources';

const dataSources = DATA_SOURCE_LIST.map(source => (
  { provide: DATA_SOURCE_TOKEN, useClass: source, multi: true}
));

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
    ...dataSources
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
