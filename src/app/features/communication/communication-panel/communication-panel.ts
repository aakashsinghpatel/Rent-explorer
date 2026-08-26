import {
  Component,
  Input,
  ChangeDetectionStrategy,
  inject,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Comment } from "../../../core/models/comment.model";
import { CommentService } from "../../../core/services/comment.service";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "app-communication-panel",
  standalone: false,
  templateUrl: "./communication-panel.html",
  styleUrl: "./communication-panel.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunicationPanel {
  @Input({ required: true }) apartmentId = "";
  readonly commentService = inject(CommentService);
  readonly auth = inject(AuthService);
  newComment = "";
  replyTo: string | null = null;
  replyText = "";

  get comments(): Comment[] {
    return this.commentService.forApartment(this.apartmentId);
  }
  topLevel(): Comment[] {
    return this.comments.filter((comment) => comment.parentId === null);
  }
  replies(parentId: string): Comment[] {
    return this.comments.filter((comment) => comment.parentId === parentId);
  }

  addComment(): void {
    if (this.commentService.add(this.apartmentId, this.newComment))
      this.newComment = "";
  }
  addReply(parentId: string): void {
    if (this.commentService.add(this.apartmentId, this.replyText, parentId)) {
      this.replyText = "";
      this.replyTo = null;
    }
  }
}
