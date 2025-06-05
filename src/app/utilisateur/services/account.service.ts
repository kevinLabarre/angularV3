import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Account } from '../interfaces/account.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  http = inject(HttpClient)
  baseUrl = 'http://localhost:3000/accounts'

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  deposit(amount: number, account: Account): Observable<Account> {
    account.solde += amount
    return this.http.put<Account>(`this.baseUrl/${account.id}`, account);
  }

  withdraw(amount: number, account: Account): Observable<Account> {
    account.solde -= amount
    return this.http.put<Account>(`this.baseUrl/${account.id}`, account);
  }

}
