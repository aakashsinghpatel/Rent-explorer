import { Injectable, signal } from '@angular/core';
import { Inquiry } from '../models/inquiry.model';
import { AuthService } from './auth.service';

const INQUIRIES_KEY = 'rentHubInquiries';

@Injectable({ providedIn: 'root' })
export class InquiryService {
  private readonly inquiriesSignal = signal<Inquiry[]>(this.load());
  readonly inquiries = this.inquiriesSignal.asReadonly();

  constructor(private readonly auth: AuthService) {}

  send(apartmentId: string, apartmentTitle: string, landlordId: string, landlordName: string, message: string): boolean {
    const user = this.auth.currentUser();
    if (!user || !message.trim()) return false;
    const inquiry: Inquiry = {
      id: crypto.randomUUID(), apartmentId, apartmentTitle, fromUserId: user.id, fromUserName: user.name,
      toUserId: landlordId, toUserName: landlordName, message: message.trim(), createdAt: new Date().toISOString()
    };
    const next = [...this.inquiriesSignal(), inquiry];
    this.inquiriesSignal.set(next);
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(next));
    return true;
  }

  private load(): Inquiry[] {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw) as Inquiry[]; } catch { return []; }
  }
}
