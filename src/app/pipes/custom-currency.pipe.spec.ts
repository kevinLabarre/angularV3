import { CurrencyPipe } from '@angular/common';
import { CustomCurrencyPipe } from './custom-currency.pipe';

describe('CustomCurrencyPipe', () => {
  it('create an instance', () => {
    const currencyPipe = new CurrencyPipe('fr');
    const pipe = new CustomCurrencyPipe(currencyPipe);
    expect(pipe).toBeTruthy();
  });
});
