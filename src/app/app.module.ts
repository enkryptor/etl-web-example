import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ExchangeRateComponent } from './currency-list/exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
