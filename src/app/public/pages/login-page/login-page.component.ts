import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import e from 'express';
import { TokenService } from '../../../admin/services/token/token.service';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  service = inject(AuthService)
  tokenService = inject(TokenService)
  router = inject(Router)

  error = false

  loginForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });

  handleConnect() {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.service.login({ UserName: this.loginForm.value.UserName!, Password: this.loginForm.value.Password! }).subscribe({
        next: res => {
          if (res.success == 1) {
            this.tokenService.saveToken(res.token.access_token)

            const isAdmin = this.tokenService.isAdmin();
            if (isAdmin) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/utilisateur']);
            }

            // this.router.navigate(['/admin'])
            this.error = false
          } else {
            this.error = true
          }
        },
        error: () => this.error = true
      })
    }
  }

}
