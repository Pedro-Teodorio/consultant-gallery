import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserProfile } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private users: User[] = [
    {
      email: 'admin@empresa.com',
      password: 'admin123',
      profile: UserProfile.Admin
    },
    {
      email: 'user@empresa.com',
      password: 'user123',
      profile: UserProfile.User
    }
  ];

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    
    if (user) {
      this.currentUser = user;
      return true;
    }
    
    return false;
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  hasAdminProfile(): boolean {
    return this.currentUser?.profile === UserProfile.Admin;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}