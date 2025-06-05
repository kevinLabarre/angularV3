import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';
import { PUBLIC_ROUTES } from './public/routes/public.routes';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './admin/routes/admin.routes';
import { adminGuard } from './admin/guard/admin.guard';
import { UtilisateurLayoutComponent } from './utilisateur/layout/utilisateur-layout/utilisateur-layout.component';
import { UTILISATEUR_ROUTES } from './utilisateur/routes/utilisateur.routes';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: ADMIN_ROUTES,
    canActivate: [adminGuard]
  },
  {
    // Attention ! aucun guard utilisé pour ces routes !
    path: 'utilisateur',
    component: UtilisateurLayoutComponent,
    children: UTILISATEUR_ROUTES
  }

];
