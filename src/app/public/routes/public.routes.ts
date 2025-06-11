import { HomepageComponent } from "../pages/homepage/homepage.component";
import { NewsPageComponent } from "../pages/news-page/news-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { SignalDemoComponent } from "../pages/signal-demo/signal-demo.component";
import { NewsExoComponent } from "../pages/news-exo/news-exo.component";

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
    path: "actualites-exo",
    component: NewsExoComponent
  },
  {
    path: 'se-connecter',
    component: LoginPageComponent
  },
  {
    path: 'signal-demo',
    component: SignalDemoComponent
  }
];
