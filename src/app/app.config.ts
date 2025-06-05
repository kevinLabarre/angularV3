import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { injectBccTokenInterceptor } from './share/interceptors/bcc-token/inject-bcc-token.interceptor';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// Enregistrer les locales "fr"
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([injectBccTokenInterceptor])),
    { provide: LOCALE_ID, useValue: 'fr' },
    CurrencyPipe

  ]
};
