import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

interface DecodeToken {
  sub: string,
  jti: string,
  iat: Date,
  Role: string,
  nbf: number,
  exp: number,
  iss: string,
  aud: string
}


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  platformId = inject(PLATFORM_ID);
  router = inject(Router);

  saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('token', token);
    }
  }

  // Pour le SSR ! Le token ne peut être stocké qu'une fois la page reçue par le client
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('token');
    }
    return null; // Ou une valeur par défaut pour le SSR
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('token');
    }
    this.router.navigate(['/se-connecter']);
  }

  getDecodeToken() {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  isAdmin(): boolean {
    const decode: DecodeToken | null = this.getDecodeToken() as DecodeToken | null;
    if (decode) {
      return decode.Role.toLowerCase() === 'root';
    }
    return false;
  }

  isUser(): boolean {
    const decode: DecodeToken | null = this.getDecodeToken() as DecodeToken | null;
    if (decode) {
      return decode.Role.toLowerCase() === 'user';
    }
    return false;
  }

}
