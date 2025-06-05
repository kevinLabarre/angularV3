import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  service = inject(TokenService);

  logout() {
    this.service.logout();
  }
}
