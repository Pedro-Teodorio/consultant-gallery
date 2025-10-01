import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Galeria de Consultores');
  protected readonly description = signal('Encontre o consultor ideal para suas necessidades.');
  
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}