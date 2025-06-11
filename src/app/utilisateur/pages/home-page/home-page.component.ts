import { Component, computed, inject, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../interfaces/account.interface';
import { DatePipe } from '@angular/common';
import { CustomCurrencyPipe } from '../../../pipes/custom-currency.pipe';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [DatePipe, CustomCurrencyPipe, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {

  // Consulter les comptes bancaires, faire un dépot / faire un retrait
  service = inject(AccountService)

  accounts: WritableSignal<Account[]> = signal([])

  handleClickDepot(account: Account) {
    this.service.updateAccountsSelected(account)
    this.displayNavigation.set(true)
  }

  displayNavigation: WritableSignal<boolean> = signal(false)

  ngOnInit(): void {
    // this.service.getAll().subscribe(data => this.accounts.set(data))
    this.service.getAll().subscribe();
    this.service.accounts$.subscribe(data => this.accounts.set(data))
  }

  ngOnDestroy(): void {
    // Angular gère les unsubscribe DE HTTP CLIENT automatiquement,
    // Angular se désabonne automatiquement des observables de HTTP CLIENT
    // ATTENTION : PAS LE CAS AVEC LES "BehaviorSubject"

    this.service.accounts$.subscribe().unsubscribe()
  }

}
