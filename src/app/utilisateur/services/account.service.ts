import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Account } from '../interfaces/account.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  http = inject(HttpClient)
  baseUrl = 'http://localhost:3000/accounts'

  private accounts = new BehaviorSubject<Account[]>([]);
  private accountSelected = new BehaviorSubject<Account>({ id: 0, userId: 0, accountNumber: '', accountType: '', solde: 0, lastTransactionDate: '' });

  accounts$ = this.accounts.asObservable();
  accountSelected$ = this.accountSelected.asObservable();

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl).pipe(
      // Le 'tap' me permet de traiter le retour de la requête sans modifier l'observable , donc sans modifier le flus de données
      // auquel s'abonneront nos composants
      tap((accounts) => {
        console.log(accounts)
        this.accounts.next(accounts)
      })
    )
  }

  deposit(amount: number, account: Account): Observable<Account> {
    account.solde += amount
    return this.http.put<Account>(`this.baseUrl/${account.id}`, account).pipe(
      tap(account => this.updateAccounts(
        [...this.accounts.getValue().filter(
          acc => acc.id !== account.id
        ), account]
      ))
    )
  }

  withdraw(amount: number, account: Account): Observable<Account> {
    account.solde -= amount
    return this.http.put<Account>(`this.baseUrl/${account.id}`, account).pipe(
      tap(account => this.updateAccounts(
        [...this.accounts.getValue().filter(
          acc => acc.id !== account.id
        ), account]
      ))
    )
  }

  updateAccounts(accounts: Account[]) {
    this.accounts.next(accounts);
  }

  updateAccountsSelected(account: Account) {
    this.accountSelected.next(account);
  }


}
