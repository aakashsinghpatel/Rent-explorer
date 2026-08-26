import { Injectable, signal } from '@angular/core';
import { Comment } from '../models/comment.model';
import { AuthService } from './auth.service';

const COMMENTS_KEY = 'rentHubComments';

@Injectable({ providedIn: 'root' })
export class CommentService {
  private readonly commentsSignal = signal<Comment[]>(this.load());
  readonly comments = this.commentsSignal.asReadonly();

  constructor(private readonly auth: AuthService) {}

  forApartment(apartmentId: string): Comment[] {
    return this.commentsSignal().filter(comment => comment.apartmentId === apartmentId);
  }

  add(apartmentId: string, text: string, parentId: string | null = null): boolean {
    const user = this.auth.currentUser();
    if (!user || !text.trim()) return false;
    const comment: Comment = {
      id: crypto.randomUUID(), apartmentId, authorId: user.id, authorName: user.name,
      text: text.trim(), createdAt: new Date().toISOString(), parentId
    };
    const next = [...this.commentsSignal(), comment];
    this.commentsSignal.set(next);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(next));
    return true;
  }

  private load(): Comment[] {
    const raw = localStorage.getItem(COMMENTS_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw) as Comment[]; } catch { return []; }
  }
}
