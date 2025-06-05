import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AuthResponse } from '../../share/interfaces/cession/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://movia.bcc.cd"

  // Quand on utilisera pas les bons identifiants, on se connectera en rôle 'User'
  login(credentials: { UserName: string, Password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl + '/auth/login', credentials)
      .pipe(
        // On 'capture' l'erreur, on envoie un token 'User' à la place.
        // ==> Mauvais identifiants = connexion en tant que 'User'
        catchError(() => {
          const a: AuthResponse = {
            success: 1,
            message: "Connexion reussie",
            token: { access_token: this.userToken, refresh_token: null, expires_in: 0 },
            content: {
              idUser: "1",
              userName: "kofikode",
              nom: "Lumumba",
              prenom: "Pascal",
              sexe: 0
            }
          }
          return of(a);
        })
      )
  }



  // Pour exemple !
  userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MDU4NTEiLCJqdGkiOiIwMzk0Yzk5YS05MWY1LTRmYTUtOTk0MS0wNjI2M2E1MWQ0M2IiLCJpYXQiOiIwNC8wNi8yMDI1IDA5OjQ4OjE3IiwiUm9sZSI6IlVzZXIiLCJuYmYiOjE3NDkwMzA0OTcsImV4cCI6MTc0OTAzNDA5NywiaXNzIjoiaHR0cHM6Ly9tb3ZpYS5iY2MuY2QiLCJhdWQiOiJNb3ZpYSJ9.UEHxLcFUuHUkLBuQCp0AOJxbeOso0804ZL5ooocawjU"

}
