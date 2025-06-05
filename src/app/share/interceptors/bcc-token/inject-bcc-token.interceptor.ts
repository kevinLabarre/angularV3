import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../../../admin/services/token/token.service';

export const injectBccTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);

  // Get token from localStorage, sessionStorage, or a service
  const token: string | null = tokenService.getToken();

  // Only add the token if it exists
  if (token) {
    // Clone the request and add the Authorization header
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    // Pass the new request to the next handler
    return next(authReq);
  }

  // If no token, proceed with the original request
  return next(req);
};
