import { Component, inject, input, OnInit, output } from '@angular/core';
import { Account } from '../../interfaces/account.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


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
export class MoneyFormComponent implements OnInit {
  // Inputs avec signal
  account = input.required<Account>();

  // Regroupement des labels d'accessibilité
  a11yLabels = input<AccessibilityLabels>({
    formLabel: 'Formulaire de transaction',
    buttonLabel: 'Soumettre la transaction'
  });

  // Output
  submitFunction = output<number>();

  // Services injectés
  route = inject(ActivatedRoute);

  // Formulaire
  form = new FormGroup({
    amount: new FormControl(0, Validators.required)
  });

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid) {
      this.submitFunction.emit(this.form.value.amount!);
    }
  }
}
