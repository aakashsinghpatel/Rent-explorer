import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import { InquiryService } from "../../core/services/inquiry.service";

@Component({
  selector: "app-communication",
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: "./communication.html",
  styleUrl: "./communication.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunicationComponent {
  private readonly auth = inject(AuthService);
  readonly inquiryService = inject(InquiryService);
  readonly received = computed(() => {
    const id = this.auth.currentUser()?.id;
    return this.inquiryService
      .inquiries()
      .filter((item) => item.toUserId === id);
  });
  readonly sent = computed(() => {
    const id = this.auth.currentUser()?.id;
    return this.inquiryService
      .inquiries()
      .filter((item) => item.fromUserId === id);
  });
}
