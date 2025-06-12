import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token/token.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router)


  // Si pas de token dans la sessionStorage, bloque la route
  const valid = tokenService.isAuthenticated();
  if (!valid) {
    //createUrlTree gère mieux l'historique du navigateur, car il remplace la navigation actuelle au lieu d'en ajouter une nouvelle
    return router.createUrlTree(['/se-connecter'])
  }
  return valid;
};

//Le guard doit retourner soit :

// true pour autoriser la navigation
// false pour bloquer la navigation
// Un UrlTree pour rediriger vers une autre route
