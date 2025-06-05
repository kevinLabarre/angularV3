import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../interfaces/account.interface';
import { DatePipe } from '@angular/common';
import { CustomCurrencyPipe } from '../../../pipes/custom-currency.pipe';
import { MoneyFormComponent } from "../../components/money-form/money-form.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [DatePipe, CustomCurrencyPipe, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  // Consulter les comptes bancaires, faire un dépot / faire un retrait
  service = inject(AccountService)

  accounts: WritableSignal<Account[]> = signal([])

  accountSelect: WritableSignal<Account | null> = signal(null)

  displayNavigation: Signal<boolean> = computed(() => this.accountSelect() !== null)

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.accounts.set(data))
  }



}
