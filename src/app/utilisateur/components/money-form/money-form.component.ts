import { Component, inject, input, OnDestroy, OnInit, output, signal } from '@angular/core';
import { Account } from '../../interfaces/account.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';


export interface AccessibilityLabels {
  formLabel: string;
  buttonLabel: string;
}


@Component({
  selector: 'app-money-form',
  imports: [ReactiveFormsModule],
  templateUrl: './money-form.component.html',
  styleUrl: './money-form.component.css'
})
export class MoneyFormComponent implements OnInit, OnDestroy {

  // Services injectés
  accountService = inject(AccountService);

  // Regroupement des labels d'accessibilité
  // Equivalent du @Input
  a11yLabels = input<AccessibilityLabels>({
    formLabel: 'Formulaire de transaction',
    buttonLabel: 'Soumettre la transaction'
  });

  depositOrWithDraw = input.required<"deposit" | "withdraw">();

  account?: Account

  ngOnInit(): void {
    this.accountService.accountSelected$.subscribe(data => this.account = data)
  }

  // Formulaire
  form = new FormGroup({
    amount: new FormControl(0, Validators.required)
  });

  submit(): void {
    if (this.form.valid) {
      if (this.account) {
        if (this.depositOrWithDraw() === "deposit") {
          this.accountService.deposit(this.form.value.amount!, this.account)
        } else if (this.depositOrWithDraw() === "withdraw") {
          this.accountService.withdraw(this.form.value.amount!, this.account)
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.accountService.accountSelected$.subscribe().unsubscribe();
  }

}
