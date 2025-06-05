import { DepositComponent } from "../pages/home-page/children_tabs/deposit/deposit.component";
import { WithDrawalComponent } from "../pages/home-page/children_tabs/with-drawal/with-drawal.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";

export const UTILISATEUR_ROUTES = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'depot', component: DepositComponent },
      { path: 'retrait', component: WithDrawalComponent }
    ]
  },
];
