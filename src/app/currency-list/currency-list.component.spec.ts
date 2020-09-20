import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DATA_SOURCE_TOKEN } from '../business-logic/data-sources';
import { ExchangeRateDataService } from '../business-logic/exchange-rate-data.service';

import { CurrencyListComponent } from './currency-list.component';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyListComponent ],
      providers: [
        { provide: DATA_SOURCE_TOKEN, useValue: [ { getData: () => [] }] },
        ExchangeRateDataService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
