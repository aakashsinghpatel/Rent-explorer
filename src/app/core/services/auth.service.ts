import { Injectable, computed, signal } from '@angular/core';
import { User, UserRole } from '../models/user.model';

const USERS_KEY = 'rentHubUsers';
const SESSION_KEY = 'rentHubCurrentUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly currentUserSignal = signal<User | null>(this.readSession());
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.currentUserSignal() !== null);
  readonly isLandlord = computed(()=> this.currentUserSignal()?.role === 'LandLord');

  constructor() {
    const users = this.readUsers();
    if (users.length === 0) {
      this.writeUsers([
        { id: 'demo-user', name: 'Demo User', email: 'demo@renthub.com', password: 'Demo@123', role: 'LandLord' },
      ]);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.readUsers().find(item => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password);
    if (!user) return false;
    this.currentUserSignal.set(user);
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return true;
  }

  register(name: string, email: string, password: string, role: UserRole): { success: boolean; message?: string } {
    const users = this.readUsers();
    if (users.some(user => user.email.toLowerCase() === email.trim().toLowerCase())) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const user: User = { id: crypto.randomUUID(), name: name.trim(), email: email.trim(), password, role };
    this.writeUsers([...users, user]);
    this.currentUserSignal.set(user);
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return { success: true };
  }

  logout(): void {
    this.currentUserSignal.set(null);
    localStorage.removeItem(SESSION_KEY);
  }

  private readUsers(): User[] {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw) as User[]; } catch { return []; }
  }

  private writeUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  private readSession(): User | null {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw) as User; } catch { return null; }
  }
}
