export interface User {
  email: string;
  password: string;
  profile: 'admin' | 'user';
}

export class UserProfile {
  static Admin: 'admin' = 'admin';
  static User: 'user' = 'user';
}