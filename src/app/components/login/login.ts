import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.errorMessage = '';
      this.router.navigate(['/consultants']);
    } else {
      this.errorMessage = 'Credenciais inválidas. Por favor, tente novamente.';
    }
  }
  
  useDemoCredentials(profile: 'admin' | 'user') {
    if (profile === 'admin') {
      this.email = 'admin@empresa.com';
      this.password = 'admin123';
    } else {
      this.email = 'user@empresa.com';
      this.password = 'user123';
    }
    this.errorMessage = '';
  }
}