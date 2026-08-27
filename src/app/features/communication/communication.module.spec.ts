import { TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";
import { CommunicationModule } from "./communication.module";
import { CommunicationPanel } from "../apartment-details/apartment-details-comment-panel/apartment-details-comment-panel";
import { provideRouter } from "@angular/router";

describe("CommunicationModule", () => {
  it("compiles the module-based communication component", async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationModule],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(CommunicationPanel);
    fixture.componentInstance.apartmentId = "apt-101";
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
