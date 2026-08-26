import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { CommunicationModule } from './communication.module';
import { CommunicationPanel } from './communication-panel/communication-panel';

describe('CommunicationModule', () => {
  it('compiles the module-based communication component', async () => {
    await TestBed.configureTestingModule({ imports: [CommunicationModule] }).compileComponents();
    const fixture = TestBed.createComponent(CommunicationPanel);
    fixture.componentInstance.apartmentId = 'apt-101';
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
