import { Component } from '@angular/core';
import { MoneyFormComponent } from '../../../../components/money-form/money-form.component';
import { Account } from '../../../../interfaces/account.interface';

@Component({
  selector: 'app-deposit',
  imports: [MoneyFormComponent],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {

}
