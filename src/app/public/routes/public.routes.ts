import { HomepageComponent } from "../pages/homepage/homepage.component";
import { NewsPageComponent } from "../pages/news-page/news-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";

export const PUBLIC_ROUTES = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'actualites',
    component: NewsPageComponent
  },
  {
    path: 'se-connecter',
    component: LoginPageComponent
  }
];
